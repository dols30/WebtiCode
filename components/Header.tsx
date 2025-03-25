"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useAuth } from "@/lib/auth-context"
import { useRouter, usePathname } from "next/navigation"
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import { ModeToggle } from "@/components/ui/mode-toggle"

export default function Header() {
  const { user, isAuthenticated, logout } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="text-xl">WebtiCode</span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} ${
                    pathname === "/" ? "bg-primary text-primary-foreground" : ""
                  }`}
                >
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/courses" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} ${
                    pathname === "/courses" ? "bg-primary text-primary-foreground" : ""
                  }`}
                >
                  Courses
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/instructors" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} ${
                    pathname === "/instructors" ? "bg-primary text-primary-foreground" : ""
                  }`}
                >
                  Instructors
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/faq" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} ${
                    pathname === "/faq" ? "bg-primary text-primary-foreground" : ""
                  }`}
                >
                  FAQ
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden md:flex items-center gap-4 ml-auto">
          <ModeToggle />
          {isAuthenticated ? (
            <>
              <Button
                variant="ghost"
                onClick={() => router.push("/dashboard")}
                className="text-primary hover:text-primary hover:bg-primary/10"
              >
                Dashboard
              </Button>
              <Button
                variant="outline"
                onClick={handleLogout}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="ghost"
                onClick={() => router.push("/login")}
                className="text-primary hover:text-primary hover:bg-primary/10"
              >
                Login
              </Button>
              <Button
                onClick={() => router.push("/register")}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Register
              </Button>
            </>
          )}
        </div>

        <div className="flex flex-1 items-center justify-end md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="pr-0">
              <nav className="flex flex-col gap-4">
                <Link href="/" className="text-sm font-medium">
                  Home
                </Link>
                <Link href="/courses" className="text-sm font-medium">
                  Courses
                </Link>
                <Link href="/instructors" className="text-sm font-medium">
                  Instructors
                </Link>
                <Link href="/faq" className="text-sm font-medium">
                  FAQ
                </Link>
                {isAuthenticated ? (
                  <>
                    <Link href="/dashboard" className="text-sm font-medium">
                      Dashboard
                    </Link>
                    <Button 
                      onClick={handleLogout} 
                      variant="ghost"
                      className="text-primary hover:text-primary hover:bg-primary/10 justify-start"
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Link href="/login" className="text-sm font-medium">
                      Login
                    </Link>
                    <Link href="/register" className="text-sm font-medium">
                      Register
                    </Link>
                  </>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
} 