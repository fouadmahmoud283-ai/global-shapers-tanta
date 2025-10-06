'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { QrCode, Upload, BarChart3, Instagram, Heart, Users, Utensils, Camera, Shield, Sparkles, Globe2, Zap, Award, BookOpen, ChefHat, Crown, Star } from 'lucide-react'

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('upload')

  return (
    <div className="min-h-screen">
      {/* Navigation Header */}
      <header className="bg-gradient-to-r from-white via-gray-50 to-white shadow-xl border-b-2 border-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Enhanced Logo & Brand */}
            <div className="flex items-center group">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-egyptian-gold rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-300 blur-sm"></div>
                <div className="relative bg-white rounded-full p-1 shadow-lg">
                  <Image
                    src="/logo.png"
                    alt="Global Shapers Tanta Hub"
                    width={48}
                    height={48}
                    className="rounded-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              
              <div className="ml-4">
                <div className="flex items-center mb-1">
                  <div className="bg-gradient-to-r from-egyptian-gold to-secondary-600 p-1.5 rounded-lg mr-3 shadow-md">
                    <Crown className="h-4 w-4 text-white" />
                  </div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    Egyptian Food Heritage Project
                  </h1>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></div>
                  <p className="text-sm text-gray-600 font-medium">
                    Global Shapers Tanta Hub Initiative
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced Navigation */}
            <nav className="flex items-center space-x-3">
              <div className="hidden md:flex items-center bg-gray-50 rounded-xl p-1 shadow-inner">
                <button
                  onClick={() => setActiveTab('upload')}
                  className={`relative px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
                    activeTab === 'upload'
                      ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg transform scale-105'
                      : 'text-gray-600 hover:bg-white hover:text-primary-700 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`p-1 rounded-md mr-2 ${
                      activeTab === 'upload' ? 'bg-white/20' : 'bg-primary-100'
                    }`}>
                      <Upload className="h-4 w-4" />
                    </div>
                    <span>Share Heritage</span>
                  </div>
                  {activeTab === 'upload' && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-1 bg-secondary-400 rounded-full"></div>
                  )}
                </button>
                
                <Link
                  href="/dashboard"
                  className="px-6 py-3 rounded-lg font-semibold text-sm text-gray-600 hover:bg-white hover:text-secondary-700 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center">
                    <div className="p-1 rounded-md bg-secondary-100 mr-2">
                      <BarChart3 className="h-4 w-4" />
                    </div>
                    <span>Analytics</span>
                  </div>
                </Link>
              </div>

              {/* Heritage Badge */}
              <div className="hidden lg:flex items-center bg-gradient-to-r from-egyptian-gold/10 to-secondary-100/50 backdrop-blur-sm px-4 py-2 rounded-xl border border-egyptian-gold/30 shadow-md">
                <Heart className="h-4 w-4 text-egyptian-gold mr-2" />
                <div className="text-xs">
                  <div className="font-bold text-gray-900">حفظ التراث</div>
                  <div className="text-gray-600">Heritage Initiative</div>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button className="p-3 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl text-gray-700 hover:bg-gradient-to-r hover:from-primary-100 hover:to-secondary-100 transition-all shadow-md">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </nav>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden pb-4 pt-2">
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveTab('upload')}
                className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  activeTab === 'upload'
                    ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-primary-50 hover:text-primary-700'
                }`}
              >
                <Upload className="h-4 w-4 inline mr-2" />
                Share Heritage
              </button>
              
              <Link
                href="/dashboard"
                className="flex-1 py-3 px-4 rounded-xl font-semibold text-sm bg-gray-100 text-gray-600 hover:bg-secondary-50 hover:text-secondary-700 text-center transition-all duration-300"
              >
                <BarChart3 className="h-4 w-4 inline mr-2" />
                Analytics
              </Link>
            </div>
          </div>

          {/* Bottom Accent Line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-egyptian-gold to-secondary-500"></div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-24 overflow-hidden">
        {/* Egyptian Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <pattern id="egyptian-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="2" fill="currentColor" />
              <path d="M5,5 L15,15 M15,5 L5,15" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#egyptian-pattern)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-secondary-500 text-black px-6 py-3 rounded-full font-bold text-lg mb-6 shadow-xl">
              <Heart className="h-5 w-5 mr-2" />
              مبادرة الحفاظ على التراث المصري
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Egyptian Food
              <span className="block text-secondary-400">Heritage</span>
            </h1>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-2xl mb-4 opacity-95 font-light">
                Preserving our culinary traditions through modern technology
              </p>
              <p className="text-lg mb-8 opacity-80 max-w-2xl mx-auto">
                Connect authentic Egyptian dishes with food lovers worldwide. Each QR code tells a story of our rich heritage, linking traditional recipes to Instagram content that celebrates our culture.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-12">
              <button
                onClick={() => setActiveTab('upload')}
                className="group bg-secondary-500 hover:bg-secondary-400 text-black px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 flex items-center"
              >
                <Camera className="h-6 w-6 mr-3 group-hover:rotate-12 transition-transform" />
                Share Your Heritage Dish
              </button>
              
              <Link
                href="/dashboard"
                className="group border-3 border-white text-white hover:bg-white hover:text-primary-600 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center"
              >
                <BarChart3 className="h-6 w-6 mr-3 group-hover:scale-110 transition-transform" />
                Community Impact
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'upload' && <UploadSection />}
        </div>
      </div>

      {/* Egyptian Heritage Section */}
      <div className="relative bg-gradient-to-b from-white via-gray-50 to-white py-24 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary-600 to-primary-700 rounded-full mb-8 shadow-xl">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Celebrating Egyptian
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                Culinary Heritage
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From ancient recipes passed down through generations to modern presentations, 
              we're digitizing Egypt's rich food culture for the world to discover.
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Left Column - Features */}
            <div className="space-y-8">
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-8 w-8 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Community Connection
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Bridge the gap between traditional Egyptian cuisine and modern food enthusiasts. 
                      Every QR code scan creates a connection to our shared heritage.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-secondary-100 to-secondary-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="h-8 w-8 text-secondary-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Cultural Preservation
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Document and share the stories behind each dish. From Koshari to Ful Medames, 
                      preserve the cultural significance for future generations.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-orange-100 to-red-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Zap className="h-8 w-8 text-egyptian-red" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Digital Innovation
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Using cutting-edge QR technology to make Egyptian cuisine more accessible, 
                      trackable, and shareable across digital platforms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Call to Action */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 rounded-3xl p-10 text-white shadow-2xl overflow-hidden">
                {/* Pattern Background */}
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <pattern id="heritage-pattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                      <circle cx="5" cy="5" r="1" fill="currentColor" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#heritage-pattern)" />
                  </svg>
                </div>
                
                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary-500 rounded-full mb-8 shadow-xl">
                    <Award className="h-10 w-10 text-black" />
                  </div>
                  
                  <h3 className="text-4xl font-bold mb-6">
                    Join the Heritage Movement
                  </h3>
                  
                  <p className="text-xl text-primary-100 mb-8 leading-relaxed">
                    Be part of Global Shapers Tanta Hub's mission to preserve and promote Egyptian food culture through innovative digital solutions.
                  </p>
                  
                  {/* Stats Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                      <div className="flex items-center justify-center w-12 h-12 bg-secondary-500 rounded-xl mb-4 mx-auto">
                        <Globe2 className="h-6 w-6 text-black" />
                      </div>
                      <div className="text-2xl font-bold mb-2">Global Reach</div>
                      <p className="text-primary-200 text-sm">Connecting cultures worldwide</p>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                      <div className="flex items-center justify-center w-12 h-12 bg-egyptian-gold rounded-xl mb-4 mx-auto">
                        <Sparkles className="h-6 w-6 text-black" />
                      </div>
                      <div className="text-2xl font-bold mb-2">Digital Heritage</div>
                      <p className="text-primary-200 text-sm">Preserving traditions digitally</p>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setActiveTab('upload')}
                    className="group bg-secondary-500 hover:bg-secondary-400 text-black px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 inline-flex items-center"
                  >
                    <Heart className="h-6 w-6 mr-3 group-hover:scale-110 transition-transform" />
                    Start Preserving Heritage
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function UploadSection() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    instagramUrl: '',
    image: null as File | null,
  })
  const [isUploading, setIsUploading] = useState(false)
  const [uploadSuccess, setUploadSuccess] = useState(false)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, image: e.target.files[0] })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsUploading(true)

    try {
      const formDataToSend = new FormData()
      formDataToSend.append('name', formData.name)
      formDataToSend.append('description', formData.description)
      formDataToSend.append('instagramUrl', formData.instagramUrl)
      if (formData.image) {
        formDataToSend.append('image', formData.image)
      }

      const response = await fetch('/api/upload-food', {
        method: 'POST',
        body: formDataToSend,
      })

      if (response.ok) {
        setUploadSuccess(true)
        setFormData({
          name: '',
          description: '',
          instagramUrl: '',
          image: null,
        })
        // Reset file input
        const fileInput = document.getElementById('image') as HTMLInputElement
        if (fileInput) fileInput.value = ''
      }
    } catch (error) {
      console.error('Upload failed:', error)
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-8 py-6 text-white">
          <div className="flex items-center justify-center">
            <ChefHat className="h-8 w-8 mr-3" />
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-2">Share Egyptian Heritage</h2>
              <p className="text-primary-100 text-lg">
                Add your traditional dish to our digital heritage collection
              </p>
            </div>
          </div>
        </div>

        <div className="p-8">
          {uploadSuccess && (
            <div className="mb-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Heart className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-green-800 font-semibold text-lg">
                    Heritage dish added successfully!
                  </p>
                  <p className="text-green-700">
                    Your QR code has been generated and is ready to share our culture.
                  </p>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className="block text-lg font-semibold text-gray-800 mb-3">
                  <Star className="inline h-5 w-5 mr-2 text-egyptian-gold" />
                  Dish Name (اسم الطبق) *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-lg transition-all duration-200"
                  placeholder="e.g., Koshari (كشري), Ful Medames (فول مدمس), Molokhia (ملوخية)"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="instagramUrl" className="block text-lg font-semibold text-gray-800 mb-3">
                  <Instagram className="inline h-5 w-5 mr-2 text-primary-600" />
                  Instagram Post URL *
                </label>
                <input
                  type="url"
                  id="instagramUrl"
                  required
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-lg transition-all duration-200"
                  placeholder="https://www.instagram.com/p/your-heritage-dish/"
                  value={formData.instagramUrl}
                  onChange={(e) => setFormData({ ...formData, instagramUrl: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label htmlFor="description" className="block text-lg font-semibold text-gray-800 mb-3">
                <Heart className="inline h-5 w-5 mr-2 text-primary-600" />
                Cultural Story & Recipe Details
              </label>
              <textarea
                id="description"
                rows={4}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-lg transition-all duration-200"
                placeholder="Share the story behind this dish... its origins, cultural significance, family traditions, or special preparation methods that make it authentically Egyptian."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="image" className="block text-lg font-semibold text-gray-800 mb-3">
                <Camera className="inline h-5 w-5 mr-2 text-primary-600" />
                Heritage Dish Image *
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-primary-400 transition-colors duration-200">
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  required
                  className="w-full px-4 py-3 text-lg"
                  onChange={handleImageChange}
                />
                <p className="mt-3 text-gray-600">
                  Upload a beautiful image that captures the essence of this traditional dish
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Supported formats: JPG, PNG, WebP (Max 10MB)
                </p>
              </div>
            </div>

            <button
              type="submit"
              disabled={isUploading}
              className={`w-full py-5 px-6 rounded-xl font-bold text-xl transition-all duration-300 transform ${
                isUploading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white shadow-xl hover:shadow-2xl hover:scale-105'
              }`}
            >
              {isUploading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                  Preserving Heritage...
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <QrCode className="h-6 w-6 mr-3" />
                  Create Heritage QR Code
                </div>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}