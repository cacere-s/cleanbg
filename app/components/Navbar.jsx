import { XSocial, Github } from './icon'

const linkSocial = [
  { name: 'X', href: 'https://twitter.com/cacere__s', icon: XSocial },
  { name: 'Github', href: '#', icon: Github }
]

export function Navbar () {
  return (
    <header className='relative top-0 w-screen h-20 flex items-center justify-center'>
      <nav className='w-3/5 flex justify-end'>
        <div className='flex items-center gap-5'>
          {
            linkSocial.map(link => {
              const IconSocial = link.icon
              return (
                <a
                  key={link.name}
                  className='text-neutral-600 hover:text-black transition-colors duration-150'
                  href={link.href} target='_blank' rel='noreferrer'
                >
                  <IconSocial />
                </a>
              )
            })
          }
        </div>
      </nav>
    </header>

  )
}
