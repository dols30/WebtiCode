import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 font-bold">
          <span className="text-xl">WebtiCode</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/courses" className="text-sm font-medium transition-colors hover:text-primary">
            Courses
          </Link>
          <Link href="/faq" className="text-sm font-medium transition-colors hover:text-primary">
            FAQ
          </Link>
          <Link href="/instructors" className="text-sm font-medium transition-colors hover:text-primary">
            Instructors
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/login">
            <Button variant="outline">Sign In</Button>
          </Link>
          <Link href="/signup">
            <Button>Sign Up</Button>
          </Link>
        </div>
      </div>
    </header>
  )
} 