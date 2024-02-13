/* eslint-disable @next/next/no-img-element */
'use client'
import { IMAGE_STATUS } from '@/app/const'
import { useDrop } from '@/app/hooks/useDrop'

export function ImageResult () {
  const { originalImage, modifiedImage, setStatus } = useDrop()
  const handleClick = () => {
    setStatus(IMAGE_STATUS.READY)
  }
  return (
    <section className='w-full flex flex-col justify-center'>
      <div className='flex justify-center sm:gap-x-5 sm:justify-between'>
        <div>
          <img className='hidden sm:flex h-[280px] w-[350px] rounded-lg bg-contain' src={originalImage} alt='original image' />
        </div>
        <div>
          <img className='h-[280px] w-[350px] rounded-lg bg-contain' src={modifiedImage} alt='image without background' />
        </div>
      </div>

      <button download className='text-lg font-medium mt-5 p-2 bg-blue-400 hover:bg-blue-500 transition duration-200 rounded-lg'>Download image without background</button>

      <button
        className='text-md cursor-pointer text-center mt-5 text-stone-600 relative hover:text-black
          before:absolute before:bottom-[.1rem]  before:h-[2px] before:w-0
          before:hover:w-[2.3rem] before:bg-stone-600 before:transition-all before:duration-500
          transition duration-150'
        onClick={handleClick}
      >
        Back
      </button>

    </section>

  )
}
