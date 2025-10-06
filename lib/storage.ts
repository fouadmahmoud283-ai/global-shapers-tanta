import { put } from '@vercel/blob'

export async function uploadImageToBlob(file: File, filename: string): Promise<string> {
  try {
    const blob = await put(filename, file, {
      access: 'public',
    })
    return blob.url
  } catch (error) {
    console.error('Blob upload error:', error)
    throw error
  }
}

export async function uploadDataUrlToBlob(dataUrl: string, filename: string): Promise<string> {
  try {
    // Convert data URL to blob
    const response = await fetch(dataUrl)
    const blob = await response.blob()
    
    const uploadResult = await put(filename, blob, {
      access: 'public',
    })
    return uploadResult.url
  } catch (error) {
    console.error('Data URL to Blob upload error:', error)
    throw error
  }
}