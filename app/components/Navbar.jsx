import { XSocial, Github } from './icon'

const linkSocial = [
  { name: 'Github', href: 'https://github.com/cacere-s/cleanbg', title: 'cacere-s/cleanbg', icon: Github },
  { name: 'X', href: 'https://twitter.com/cacere__s', title: 'cacere-s', icon: XSocial }
]

export function Navbar () {
  return (
    <header className='mt-14 sm:mt-28 mb-5 w-screen flex items-center justify-center'>
      <nav className='w-11/12 sm:w-[600px] flex flex-col text-center sm:flex-row sm:justify-between'>

        <section>
          <h1 className='text-3xl font-bold'>Open Source</h1>
          <h3 className='mt-1 text-lg font-serif text-neutral-600'>Remove backgound image</h3>
        </section>

        <div className='flex justify-center sm:flex-col'>
          {
            linkSocial.map(link => {
              const IconSocial = link.icon
              return (
                <a
                  key={link.name}
                  className='text-black hover:bg-zinc-200 transition-colors duration-200 flex items-center gap-x-2 py-1 px-3 m-px rounded-2xl'
                  href={link.href} target='_blank' rel='noreferrer'
                >
                  <IconSocial />
                  <p className='text-md font-medium tracking-tighter'>{link.title}</p>
                </a>
              )
            })
          }
        </div>
      </nav>
    </header>

  )
}
