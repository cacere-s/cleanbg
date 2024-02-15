import { Cloudinary } from '@cloudinary/url-gen'
import { backgroundRemoval } from '@cloudinary/url-gen/actions/effect'

const cloudinary = new Cloudinary({
  cloud: {
    cloudName: process.env.NEXT_PUBLIC_CLOUDNAME
  },
  url: {
    secure: true
  }
})

export const removeBackground = async (publicId) => {
  const imageWithoutBackground = await cloudinary.image(publicId).effect(backgroundRemoval())
  return imageWithoutBackground.toURL()
}
