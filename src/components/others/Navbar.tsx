import { Link, NavLink } from "react-router-dom"
import { Equal, X } from "lucide-react"
import React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ROUTES } from "@/router/router"
import { CartSheet } from "../cart/CartSheet"
import { SearchSheet } from "./SearchSheet"

const menuItems = [
  { name: 'Home', href: ROUTES.HOME },
  { name: 'Products', href: ROUTES.PRODUCTS },
  { name: 'Categories', href: ROUTES.CATEGORIES },
  { name: 'About', href: ROUTES.ABOUT },
]

export default function Navbar() {
  const [menuState, setMenuState] = React.useState(false)

  return (
    <header>
      <nav data-state={menuState ? "active" : undefined} className="w-full pb-3 px-4">
        <div className={cn("transition-all duration-300")}>
          <div className="relative flex flex-wrap items-center justify-between gap-6 lg:gap-0 pb-1">

            <div className="flex w-full items-center justify-between lg:w-auto">
              <Link to={ROUTES.HOME} aria-label="home">
                <p className="font-semibold text-xl tracking-tighter">Flora</p>
              </Link>

              <div className="flex items-center gap-4 lg:hidden">
                <SearchSheet />
                <CartSheet />

                <button
                  onClick={() => setMenuState((s) => !s)}
                  aria-label={menuState ? "Close Menu" : "Open Menu"}
                  aria-expanded={menuState}
                  aria-controls="mobile-menu"
                  className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5"
                >
                  <Equal className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                  <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                </button>
              </div>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <NavLink
                      to={item.href}
                      className={({ isActive }) =>
                        cn("hover:text-primary block duration-150", isActive && "font-semibold")
                      }
                    >
                      <span>{item.name}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <SearchSheet />
              <CartSheet />
              <Button variant="secondary" size="sm" className="border">
                Login
              </Button>
            </div>

            <div
              id="mobile-menu"
              className="bg-background hidden in-data-[state=active]:block w-full flex-wrap items-center justify-end space-y-8 rounded-xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:hidden dark:shadow-none"
            >
              <div>
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <NavLink
                        to={item.href}
                        className={({ isActive }) => cn("block", isActive && "font-semibold")}
                      >
                        <span>{item.name}</span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex w-full flex-col space-y-3">
                <Button variant="secondary" size="sm" className="border">
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