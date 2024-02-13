import { IMAGE_STATUS } from '@/app/const'
import { useDrop } from '@/app/hooks/useDrop'

export function ErrorUpload () {
  const { setStatus } = useDrop()
  const handleClick = () => setStatus(IMAGE_STATUS.READY)
  return (
    <section className='w-full flex justify-center mt-10'>
      <div className='flex flex-col justify-center items-center border rounded-xl shadow-md p-5 '>
        <h3 className='text-2xl font-semibold'>Error</h3>
        <p className='text-lg'>failed to download image</p>
        <button className='bg-slate-400 hover:bg-slate-500 w-full h-10 rounded-lg mt-2 ' onClick={handleClick}>Try again</button>
      </div>
    </section>

  )
}
