import { removeBackground } from './removeBackground'

export async function upload ({ image }) {
  const formData = new FormData()
  formData.append('file', image)
  formData.append('upload_preset', process.env.NEXT_PUBLIC_UPLOAD_PRESET)
  formData.append('timestamp', (Date.now() / 1000))
  formData.append('api_key', process.env.NEXT_PUBLIC_API_KEY)

  try {
    const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDNAME}/image/upload`, {
      method: 'POST',
      body: formData
    })
    const data = await response.json()
    const { public_id: publicId, secure_url: url } = data
    const withoutBackground = await removeBackground(publicId)
    return { error: false, data: { withBackground: url, withoutBackground } }
  } catch (error) {
    return { error: true, data: null }
  }
}
