import { useDrop } from '@/app/hooks/useDrop'
import { Dropzone } from './Dropzone'
import { Loading } from './SkeletonImage'
import { ErrorUpload } from './Error'
import { IMAGE_STATUS } from '@/app/const'
import { ImageResult } from './Image'

export function Status () {
  const { imageStatus } = useDrop()
  return (
    // It will be validated which component will be displayed
    // if the dropzone, waiting skeleton component or the result
    <>
      {imageStatus === IMAGE_STATUS.READY ? <Dropzone /> : null}
      {imageStatus === IMAGE_STATUS.UPLOADING ? <Loading /> : null}
      {imageStatus === IMAGE_STATUS.DONE ? <ImageResult /> : null}
      {imageStatus === IMAGE_STATUS.ERROR ? <ErrorUpload /> : null}
    </>

  )
}
