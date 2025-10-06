import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@/lib/database'

export async function GET() {
  try {
    const result = await sql`
      SELECT * FROM foods 
      ORDER BY created_at DESC
    `

    return NextResponse.json({ foods: result.rows })
  } catch (error) {
    console.error('Error fetching foods:', error)
    return NextResponse.json(
      { error: 'Failed to fetch foods' },
      { status: 500 }
    )
  }
}