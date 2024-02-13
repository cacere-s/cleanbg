'use client'
import { useUpload } from '../../hooks/useUpload'
import { DropzoneIcon } from '../icon'

export function Dropzone () {
  const { getInputProps, getRootProps, isDragActive } = useUpload()

  return (
    <div className='w-full'>

      <form
        id='dropzone' className='flex items-center justify-center relative'
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <div className='flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-bray-800 dark:bg-gray-50 hover:bg-gray-100 border-gray-600 hover:border-gray-500'>
          <div className='flex flex-col items-center justify-center pt-5 pb-6'>
            <DropzoneIcon />
            {
            isDragActive
              ? <p className='mb-2 text-sm text-gray-700 dark:text-gray-400'>Drop the files here </p>
              : <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'><span className='font-semibold'>Click to upload</span> or drag and drop</p>
            }
            <p className='text-xs text-gray-500 dark:text-gray-400'>PNG, JPG or WEBP</p>
          </div>
        </div>
      </form>
    </div>
  )
}
