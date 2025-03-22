import { type ReactNode } from "react"

interface FAQLayoutProps {
  children: ReactNode
}

export default function FAQLayout({ children }: FAQLayoutProps) {
  return <>{children}</>
} 