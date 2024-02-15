'use client'
import ContentLoader from 'react-content-loader'

function SkeletonImage () {
  return (
    <ContentLoader
      speed={2}
      width='100%'
      height={350}
      viewBox='0 0 600 350'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <rect x='0' y='0' rx='2' ry='2' width='100%' height='350' />
    </ContentLoader>
  )
}
function SkeletonImageMobile () {
  return (
    <ContentLoader
      speed={2}
      width='100%'
      height={350}
      viewBox='0 0 350 350'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <rect x='0' y='0' rx='2' ry='2' width='100%' height='350' />
    </ContentLoader>
  )
}

export function Loading () {
  return (
    <section>
      <div className='sm:hidden'>
        <SkeletonImageMobile />
      </div>
      <div className='hidden sm:flex'>
        <SkeletonImage />
      </div>

    </section>

  )
}
