'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  QrCode, 
  ArrowLeft, 
  BarChart3, 
  Eye, 
  Calendar,
  Download,
  ExternalLink,
  TrendingUp,
  Heart,
  Users,
  Utensils,
  Instagram,
  Globe,
  Crown,
  ChefHat,
  Star,
  RefreshCw
} from 'lucide-react'

interface Food {
  // MongoDB properties
  _id?: string
  instagramUrl?: string
  imageUrl?: string
  qrCodeUrl?: string
  scanCount?: number
  createdAt?: string
  // PostgreSQL properties
  id?: number
  instagram_url?: string
  image_url?: string
  qr_code_url?: string
  scan_count?: number
  created_at?: string
  // Common properties
  name: string
  description?: string
}

interface AnalyticsData {
  foods?: Food[]
  totalScans?: number
  totalFoods?: number
  recentScans?: any[]
  scansByDay?: { _id: string; count: number }[]
}

export default function DashboardPage() {
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)
  const [refreshing, setRefreshing] = useState(false)

  useEffect(() => {
    fetchAnalytics()
    
    // Auto-refresh every 30 seconds to show updated scan counts
    const interval = setInterval(() => {
      fetchAnalytics()
    }, 30000)

    return () => clearInterval(interval)
  }, [])

  const fetchAnalytics = async (isManualRefresh = false) => {
    if (isManualRefresh) {
      setRefreshing(true)
    }
    
    try {
      const response = await fetch('/api/analytics', {
        cache: 'no-store', // Ensure fresh data
        headers: {
          'Cache-Control': 'no-cache',
        },
      })
      const data = await response.json()
      setAnalytics(data)
      setLastUpdated(new Date())
    } catch (error) {
      console.error('Error fetching analytics:', error)
    } finally {
      setLoading(false)
      setRefreshing(false)
    }
  }

  const downloadQR = async (qrCodeUrl: string, foodName: string) => {
    try {
      const response = await fetch(qrCodeUrl)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `${foodName.replace(/\s+/g, '_')}_QR.png`
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
    } catch (error) {
      console.error('Error downloading QR:', error)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="animate-spin rounded-full h-32 w-32 border-4 border-primary-200 border-t-primary-600 mx-auto"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <ChefHat className="h-12 w-12 text-primary-600" />
            </div>
          </div>
          <h3 className="mt-6 text-xl font-semibold text-gray-900">Loading Heritage Dashboard</h3>
          <p className="mt-2 text-gray-600">Gathering community engagement data...</p>
        </div>
      </div>
    )
  }

  if (!analytics) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600">Error loading analytics data</p>
          <button
            onClick={() => fetchAnalytics(true)}
            className="mt-4 btn-primary"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Header */}
      <div className="bg-white shadow-xl border-b border-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center py-8">
            <div className="flex items-center mb-4 lg:mb-0">
              <Link
                href="/"
                className="flex items-center text-primary-600 hover:text-primary-800 font-medium transition-colors mr-8"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Heritage Hub
              </Link>
              
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => fetchAnalytics(true)}
                  disabled={refreshing}
                  className="flex items-center px-3 py-2 bg-primary-100 hover:bg-primary-200 text-primary-700 rounded-lg transition-colors disabled:opacity-50"
                >
                  <svg 
                    className={`h-4 w-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  {refreshing ? 'Refreshing...' : 'Refresh'}
                </button>
                
                {lastUpdated && (
                  <span className="text-sm text-gray-500">
                    Last updated: {lastUpdated.toLocaleTimeString()}
                  </span>
                )}
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="flex-shrink-0 mr-4">
                <Image
                  src="/logo.png"
                  alt="Global Shapers Tanta Hub"
                  width={60}
                  height={60}
                  className="rounded-full shadow-lg"
                />
              </div>
              <div className="text-center lg:text-right">
                <h1 className="text-3xl font-bold text-gray-900 flex items-center">
                  <Crown className="h-8 w-8 text-egyptian-gold mr-3" />
                  Heritage Impact Dashboard
                </h1>
                <div className="flex items-center text-primary-600 font-semibold mt-1">
                  <Globe className="h-4 w-4 mr-2" />
                  Global Shapers Tanta Hub • Egyptian Food Heritage Initiative
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center">
              <div className="p-3 bg-primary-100 rounded-xl relative">
                <BarChart3 className="h-7 w-7 text-primary-600" />
                {refreshing && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                )}
              </div>
              <div className="ml-4">
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Total Scans</p>
                <p className="text-3xl font-bold text-gray-900">{analytics.totalScans || 0}</p>
                <p className="text-xs text-green-600 font-medium flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></div>
                  Live Updates Every 30s
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center">
              <div className="p-3 bg-secondary-100 rounded-xl">
                <QrCode className="h-7 w-7 text-secondary-700" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">QR Codes Created</p>
                <p className="text-3xl font-bold text-gray-900">{analytics.totalFoods || 0}</p>
                <p className="text-xs text-secondary-700 font-medium">Egyptian Dishes</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center">
              <div className="p-3 bg-egyptian-gold/20 rounded-xl">
                <TrendingUp className="h-7 w-7 text-egyptian-gold" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Avg. Engagement</p>
                <p className="text-3xl font-bold text-gray-900">
                  {(analytics.totalFoods || 0) > 0 
                    ? Math.round((analytics.totalScans || 0) / (analytics.totalFoods || 1)) 
                    : 0}
                </p>
                <p className="text-xs text-egyptian-gold font-medium">Scans per Dish</p>
              </div>
            </div>
          </div>
        </div>

        {/* Food Items Grid */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100">
          <div className="px-6 py-5 border-b border-gray-200 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-t-xl">
            <h2 className="text-xl font-bold text-gray-900">Egyptian Traditional Food Collection</h2>
            <p className="text-sm text-gray-600 mt-1">Promoting our rich culinary heritage through digital innovation</p>
          </div>
          
          {!analytics.foods || analytics.foods.length === 0 ? (
            <div className="p-12 text-center">
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 max-w-md mx-auto">
                <div className="text-6xl mb-4">🍽️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Start Your Heritage Journey
                </h3>
                <p className="text-gray-600 mb-6">
                  No Egyptian dishes shared yet. Be the first to preserve our culinary heritage digitally!
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg"
                >
                  <Heart className="h-5 w-5 mr-2" />
                  Share First Heritage Dish
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 p-8">
              {analytics.foods.map((food, index) => (
                <div key={food._id || food.id || `food-${index}`} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <div className="relative h-56">
                    <Image
                      src={food.imageUrl || food.image_url || '/placeholder-food.jpg'}
                      alt={food.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {food.scanCount || food.scan_count || 0} scans
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                      <Star className="h-5 w-5 text-egyptian-gold mr-2" />
                      {food.name}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {food.description || 'A traditional Egyptian dish preserving our culinary heritage.'}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4 text-sm">
                      <div className="flex items-center text-green-600 font-medium">
                        <Eye className="h-4 w-4 mr-1" />
                        {food.scanCount || food.scan_count || 0} community views
                      </div>
                      <div className="flex items-center text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(food.createdAt || food.created_at || Date.now()).toLocaleDateString()}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => downloadQR(food.qrCodeUrl || food.qr_code_url || '', food.name)}
                        className="bg-primary-600 hover:bg-primary-700 text-white py-3 px-4 rounded-xl font-semibold transition-colors flex items-center justify-center shadow-lg"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </button>
                      <a
                        href={food.instagramUrl || food.instagram_url || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-3 px-4 rounded-xl font-semibold transition-all flex items-center justify-center shadow-lg"
                      >
                        <Instagram className="h-4 w-4 mr-2" />
                        View
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Recent Activity */}
        {analytics.recentScans && analytics.recentScans.length > 0 && (
          <div className="mt-12 bg-white rounded-2xl shadow-xl border border-gray-100">
            <div className="px-8 py-6 border-b border-gray-200 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-t-2xl">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <Users className="h-6 w-6 text-primary-600 mr-3" />
                Community Engagement Activity
              </h2>
              <p className="text-gray-600 mt-1">Recent interactions with our Egyptian heritage dishes</p>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Food Item
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Scanned At
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Location
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {analytics.recentScans && analytics.recentScans.map((scan, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {scan?.food?.name || 'Unknown Dish'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {scan?.scannedAt ? new Date(scan.scannedAt).toLocaleString() : 'Unknown Date'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {scan?.ip === 'unknown' || !scan?.ip ? 'Unknown' : scan.ip}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}