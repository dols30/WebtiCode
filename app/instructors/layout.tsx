import { type ReactNode } from "react"

interface InstructorsLayoutProps {
  children: ReactNode
}

export default function InstructorsLayout({ children }: InstructorsLayoutProps) {
  return <>{children}</>
} 