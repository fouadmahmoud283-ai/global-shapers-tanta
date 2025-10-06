import { sql } from '@vercel/postgres'

// Initialize database tables
export async function initializeDatabase() {
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

    console.log('Database tables initialized successfully')
  } catch (error) {
    console.error('Database initialization error:', error)
    throw error
  }
}

export { sql }