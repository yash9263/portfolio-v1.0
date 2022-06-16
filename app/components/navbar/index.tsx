import { NavLink } from '@remix-run/react'

const navLinks = [
  {
    name: 'work',
    to: '/work',
  },
  {
    name: 'projects',
    to: '/projects',
  },
]

const Navbar = () => {
  return (
    <header className="container fixed top-0 left-0 right-0 mobile:px-4 h-16 flex backdrop-blur z-20">
      <NavLink to="/" className="flex items-center text-3xl">
        Y.
      </NavLink>
      <nav className="ml-auto">
        <ul className="h-full flex justify-end items-center gap-12">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink to={link.to} className="text-xl animated-link">
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
