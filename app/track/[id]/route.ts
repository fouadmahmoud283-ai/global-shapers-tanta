import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@/lib/database'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params
    const foodId = parseInt(id)
    
    if (isNaN(foodId)) {
      return NextResponse.redirect(new URL('/', request.url))
    }

    // Find the food item
    const foodResult = await sql`
      SELECT * FROM foods WHERE id = ${foodId}
    `
    
    if (foodResult.rows.length === 0) {
      return NextResponse.redirect(new URL('/', request.url))
    }

    const food = foodResult.rows[0]

    // Record the scan
    const userAgent = request.headers.get('user-agent') || 'unknown'
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown'

    await sql`
      INSERT INTO scans (food_id, ip_address, user_agent)
      VALUES (${foodId}, ${ip}, ${userAgent})
    `
    
    // Increment scan count
    await sql`
      UPDATE foods 
      SET scan_count = scan_count + 1 
      WHERE id = ${foodId}
    `

    // Redirect to Instagram
    return NextResponse.redirect(food.instagram_url)

  } catch (error) {
    console.error('Tracking error:', error)
    return NextResponse.redirect(new URL('/', request.url))
  }
}