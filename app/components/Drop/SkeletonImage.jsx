'use client'
import ContentLoader from 'react-content-loader'

function SkeletonImage () {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={350}
      viewBox='0 0 280 350'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <rect x='0' y='0' rx='2' ry='2' width='280' height='350' />
    </ContentLoader>
  )
}

export function Loading () {
  return (
    <div className='flex justify-center sm:justify-between'>
      <div className='hidden sm:flex'>
        <SkeletonImage />
      </div>
      <SkeletonImage />
    </div>
  )
}
