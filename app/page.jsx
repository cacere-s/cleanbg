import { ContextDrop } from './components/Drop/ContextDrop'

export default function Home () {
  return (
    <main className='w-full flex justify-center'>
      <section className='w-11/12 sm:w-[600px] grid grid-cols-1'>
        <div className='w-full'>
          <ContextDrop />
        </div>
      </section>
    </main>

  )
}
