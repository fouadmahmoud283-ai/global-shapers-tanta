import { sql } from '@/lib/database'

export async function GET() {
  try {
    // Create foods table
    await sql`
      CREATE TABLE IF NOT EXISTS foods (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        instagram_url VARCHAR(500) NOT NULL,
        image_url VARCHAR(500) NOT NULL,
        qr_code_url VARCHAR(500) NOT NULL,
        tracking_url VARCHAR(500) NOT NULL,
        scan_count INTEGER DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `

    // Create scans table
    await sql`
      CREATE TABLE IF NOT EXISTS scans (
        id SERIAL PRIMARY KEY,
        food_id INTEGER REFERENCES foods(id) ON DELETE CASCADE,
        scanned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        ip_address VARCHAR(45),
        user_agent TEXT
      )
    `

    return Response.json({ 
      message: 'Database initialized successfully',
      tables: ['foods', 'scans']
    })
  } catch (error) {
    console.error('Database setup error:', error)
    return Response.json(
      { error: 'Failed to initialize database' }, 
      { status: 500 }
    )
  }
}