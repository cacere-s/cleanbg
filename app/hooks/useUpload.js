import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { useDrop } from './useDrop'
import { IMAGE_STATUS } from '../const'
import { upload } from '../lib/uploadCloud'

export function useUpload () {
  const { setStatus, setOriginal } = useDrop()
  const onDrop = useCallback(async acceptedFiles => {
    setStatus(IMAGE_STATUS.UPLOADING)
    if (acceptedFiles[0] === undefined) return setStatus(IMAGE_STATUS.ERROR)

    const { error, data } = await upload({ image: acceptedFiles[0] })
    if (error) return setStatus(IMAGE_STATUS.ERROR)
    setOriginal(data)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpeg'],
      'image/jpg': ['.jpg'],
      'image/webp': ['.webp']

    },
    maxFiles: 1,
    onDrop
  })
  return { getRootProps, getInputProps, isDragActive }
}
