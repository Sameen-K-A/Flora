import { Link } from "react-router-dom"
import { Equal, X } from 'lucide-react'
import React from 'react'
import { cn } from '@/lib/utils'
import { Button } from "@/components/ui/button"
import { ROUTES } from "@/router/router"

const menuItems = [
  { name: 'Home', href: ROUTES.HOME },
  { name: 'Products', href: ROUTES.HOME },
  { name: 'Categories', href: ROUTES.HOME },
  { name: 'About', href: ROUTES.HOME },
]

export default function Navbar() {
  const [menuState, setMenuState] = React.useState(false)

  return (
    <header>
      <nav
        data-state={menuState && 'active'}
        className="w-full pb-3"
      >
        <div className={cn('transition-all duration-300')}>
          <div className="relative flex flex-wrap items-center justify-between gap-6 lg:gap-0 pb-1">
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                to={ROUTES.HOME}
                aria-label="home"
                >
                <p className='font-semibold text-xl tracking-tighter'>Flora</p>
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                <Equal className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.href}
                      className="hover:text-primary block duration-150">
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex hidden w-full flex-wrap items-center justify-end space-y-8 rounded-xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.href}
                        className="block">
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3">
                <Button variant="secondary" size="sm" className="text-background border">
                  Login
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}