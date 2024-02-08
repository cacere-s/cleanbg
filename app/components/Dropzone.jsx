import { DropzoneIcon } from './icon'

export function Dropzone () {
  return (
    <div class='max-w-sm md:max-w-xl mx-auto'>

      <div class='flex items-center justify-center w-full'>
        <label className='flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-bray-800 dark:bg-gray-50 hover:bg-gray-100 border-gray-600 hover:border-gray-500'>
          <div className='flex flex-col items-center justify-center pt-5 pb-6'>
            <DropzoneIcon />
            <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'><span class='font-semibold'>Click to upload</span> or drag and drop</p>
            <p className='text-xs text-gray-500 dark:text-gray-400'>PNG, JPG or WEBP</p>
          </div>
        </label>
      </div>
    </div>
  )
}
