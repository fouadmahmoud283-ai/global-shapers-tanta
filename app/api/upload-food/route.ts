import { NextRequest, NextResponse } from 'next/server'
import { sql, initializeDatabase } from '@/lib/database'
import { uploadImageToBlob, uploadDataUrlToBlob } from '@/lib/storage'
import QRCode from 'qrcode'

export async function POST(request: NextRequest) {
  try {
    // Initialize database if needed
    await initializeDatabase()

    const formData = await request.formData()
    const name = formData.get('name') as string
    const description = formData.get('description') as string || ''
    const instagramUrl = formData.get('instagramUrl') as string
    const image = formData.get('image') as File

    if (!name || !instagramUrl || !image) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Generate a temporary ID for file naming
    const tempId = Date.now().toString()
    
    // Upload image to Vercel Blob
    const imageName = `egyptian-food/${tempId}-${image.name}`
    const imageUrl = await uploadImageToBlob(image, imageName)
    
    // Create tracking URL (we'll update with real ID after insert)
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://food-heritage-tanta-shapers.vercel.app'
    const trackingUrl = `${baseUrl}/track/PLACEHOLDER`
    
    console.log(`Using base URL: ${baseUrl}`)
    
    // Generate QR code
    const qrCodeDataUrl = await QRCode.toDataURL(trackingUrl, {
      width: 300,
      margin: 2,
      color: {
        dark: '#0284c7', // Global Shapers blue
        light: '#FFFFFF'
      }
    })

    // Upload QR code to Vercel Blob
    const qrCodeName = `qr-codes/qr-${tempId}.png`
    const qrCodeUrl = await uploadDataUrlToBlob(qrCodeDataUrl, qrCodeName)

    // Insert into database
    const result = await sql`
      INSERT INTO foods (name, description, instagram_url, image_url, qr_code_url, tracking_url)
      VALUES (${name}, ${description}, ${instagramUrl}, ${imageUrl}, ${qrCodeUrl}, ${trackingUrl})
      RETURNING *
    `

    const food = result.rows[0]
    
    // Update tracking URL with real ID
    const realTrackingUrl = `${baseUrl}/track/${food.id}`
    console.log(`Final tracking URL: ${realTrackingUrl}`)
    
    await sql`
      UPDATE foods 
      SET tracking_url = ${realTrackingUrl}
      WHERE id = ${food.id}
    `

    // Generate new QR code with correct URL
    const finalQrCodeDataUrl = await QRCode.toDataURL(realTrackingUrl, {
      width: 300,
      margin: 2,
      color: {
        dark: '#0284c7',
        light: '#FFFFFF'
      }
    })

    // Upload final QR code
    const finalQrCodeName = `qr-codes/qr-${food.id}.png`
    const finalQrCodeUrl = await uploadDataUrlToBlob(finalQrCodeDataUrl, finalQrCodeName)
    
    // Update QR code URL in database
    await sql`
      UPDATE foods 
      SET qr_code_url = ${finalQrCodeUrl}
      WHERE id = ${food.id}
    `

    const finalFood = {
      ...food,
      tracking_url: realTrackingUrl,
      qr_code_url: finalQrCodeUrl
    }

    return NextResponse.json({
      success: true,
      food: finalFood
    })

  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json(
      { error: 'Failed to upload food item' },
      { status: 500 }
    )
  }
}