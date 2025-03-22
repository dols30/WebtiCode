import { type ReactNode } from "react"

interface CoursesLayoutProps {
  children: ReactNode
}

export default function CoursesLayout({ children }: CoursesLayoutProps) {
  return <>{children}</>
} 