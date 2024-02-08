export function Footer () {
  return (
    <footer className='fixed bottom-5 w-full text-center'>
      <h6 className='text-stone-600'>built by
        <a
          href='#'
          className='ml-1 relative hover:text-black before:absolute before:-bottom-[.03rem] before:left-4 before:h-[2px] before:w-0
          before:hover:w-[3.6rem] before:bg-stone-600 before:transition-all before:duration-500
          transition duration-150'
        >
          @caceres
        </a>
      </h6>
    </footer>
  )
}
