/* eslint-disable @next/next/no-img-element */
'use client'
import { IMAGE_STATUS } from '@/app/const'
import { useDrop } from '@/app/hooks/useDrop'

export function ImageResult () {
  const { originalImage, modifiedImage, setStatus, setOriginal, setModified } = useDrop()
  const handleClick = () => {
    setStatus(IMAGE_STATUS.READY)
    setOriginal('')
    setModified('')
  }
  return (
    <section className='w-full flex flex-col justify-center'>
      <img className=' w-full h-72 sm:h-80 rounded-lg' src={originalImage} alt='original image' />

      <div className='w-full flex flex-col items-center'>
        <a
          href={modifiedImage} target='_blank' rel='noreferrer'
          className='text-sm w-full text-center font-medium mt-2 p-2 bg-blue-400 hover:bg-blue-500 transition duration-200 rounded-lg'
        >
          View and download image without background
        </a>

        <button
          className='text-md cursor-pointer mt-5 w-10 text-stone-600 relative hover:text-black
          before:absolute before:bottom-[.1rem]  before:h-[2px] before:w-0
          before:hover:w-[2.3rem] before:bg-stone-600 before:transition-all before:duration-500
          transition duration-150'
          onClick={handleClick}
        >
          Back
        </button>
      </div>

    </section>

  )
}
