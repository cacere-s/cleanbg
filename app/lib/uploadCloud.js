export async function upload ({ image }) {
  const formData = new FormData()
  formData.append('file', image)
  formData.append('upload_preset', 'fksdccvg')
  formData.append('timestamp', (Date.now() / 1000))
  formData.append('api_key', '378889246298881')

  try {
    const response = await fetch('https://api.cloudinary.com/v1_1/dgaj83nvk/image/upload', {
      method: 'POST',
      body: formData
    })
    const data = await response.json()
    const { secure_url: url } = data
    return { error: false, data: url }
  } catch (error) {
    return { error: true, data: null }
  }
}
