import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@/lib/database'

// Force this route to be dynamic and not cached
export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET() {
  console.log('Analytics API called at:', new Date().toISOString())
  
  try {
    // Get all foods with their scan counts
    const foodsResult = await sql`
      SELECT * FROM foods 
      ORDER BY scan_count DESC, created_at DESC
    `

    // Get recent scans with food details
    const recentScansResult = await sql`
      SELECT 
        s.scanned_at,
        s.ip_address,
        f.name as food_name,
        f.id as food_id
      FROM scans s
      JOIN foods f ON s.food_id = f.id
      ORDER BY s.scanned_at DESC
      LIMIT 10
    `

    // Get total scans
    const totalScansResult = await sql`
      SELECT COUNT(*) as total FROM scans
    `

    // Get scans by day for the last 7 days
    const scansByDayResult = await sql`
      SELECT 
        DATE(scanned_at) as date,
        COUNT(*) as count
      FROM scans 
      WHERE scanned_at >= CURRENT_DATE - INTERVAL '7 days'
      GROUP BY DATE(scanned_at)
      ORDER BY date ASC
    `

    const foods = foodsResult.rows
    const recentScans = recentScansResult.rows.map(scan => ({
      scannedAt: scan.scanned_at,
      ip: scan.ip_address,
      food: {
        name: scan.food_name,
        _id: scan.food_id
      }
    }))
    const totalScans = parseInt(totalScansResult.rows[0]?.total || '0')
    const scansByDay = scansByDayResult.rows.map(row => ({
      _id: row.date,
      count: parseInt(row.count)
    }))

    const response = NextResponse.json({
      foods,
      recentScans,
      totalScans,
      scansByDay,
      totalFoods: foods.length,
      timestamp: new Date().toISOString(), // Add timestamp to ensure unique responses
    })

    // Set cache-busting headers
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
    response.headers.set('Pragma', 'no-cache')
    response.headers.set('Expires', '0')
    response.headers.set('Surrogate-Control', 'no-store')

    return response
  } catch (error) {
    console.error('Error fetching analytics:', error)
    return NextResponse.json(
      { error: 'Failed to fetch analytics' },
      { status: 500 }
    )
  }
}