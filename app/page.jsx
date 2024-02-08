import { Dropzone } from './components/Dropzone'

export default function Home () {
  return (
    <main className='w-full h-[450px] flex justify-center items-center'>
      <section className='w-full md:w-4/5 grid grid-cols-1 md:grid-cols-2 grid-rows-1'>
        <div className='p-5 w-full text-balance text-center md:text-left  flex items-center justify-center '>
          <h1 className='text-3xl md:text-5xl antialiased font-medium leading-tight'>open source image background remove</h1>
        </div>
        <div className='w-full'>
          <Dropzone />
        </div>
      </section>
    </main>

  )
}
