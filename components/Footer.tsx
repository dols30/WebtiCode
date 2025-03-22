import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">WebtiCode</h3>
            <p className="text-slate-300 mb-4">
              Empowering the next generation of web developers with cutting-edge skills and knowledge.
            </p>
            <div className="flex space-x-4">
              {/* Facebook */}
              <a href="#" className="text-slate-300 hover:text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z"></path>
                </svg>
              </a>
              {/* Twitter */}
              <a href="#" className="text-slate-300 hover:text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 5.89c-.74.32-1.54.54-2.37.64.85-.5 1.5-1.32 1.8-2.27-.8.47-1.68.8-2.62 1a4.1 4.1 0 0 0-7 3.73c-3.4-.17-6.43-1.8-8.46-4.29a4.1 4.1 0 0 0 1.27 5.49c-.67-.02-1.3-.2-1.86-.5v.05a4.1 4.1 0 0 0 3.3 4.02 4.2 4.2 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 2 18.46a11.57 11.57 0 0 0 6.29 1.84c7.55 0 11.67-6.25 11.67-11.67 0-.18 0-.36-.01-.53.8-.58 1.5-1.3 2.05-2.2z"></path>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="text-slate-300 hover:text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.98c2.67 0 2.99.01 4.04.06.98.04 1.5.2 1.86.34.46.18.8.4 1.15.75.34.34.57.69.75 1.15.13.35.3.88.34 1.86.05 1.05.06 1.37.06 4.04s-.01 2.99-.06 4.04c-.04.98-.2 1.5-.34 1.86-.18.46-.4.8-.75 1.15-.34.34-.69.57-1.15.75-.35.13-.88.3-1.86.34-1.05.05-1.37.06-4.04.06zM12 .98c-2.72 0-3.06.01-4.12.06-1.07.05-1.8.22-2.43.46-.66.26-1.21.6-1.77 1.16-.56.55-.9 1.11-1.16 1.77-.25.63-.42 1.36-.46 2.43-.05 1.06-.06 1.4-.06 4.12s.01 3.06.06 4.12c.05 1.07.22 1.8.46 2.43.26.66.6 1.21 1.16 1.77.55.56 1.11.9 1.77 1.16.63.25 1.36.42 2.43.46 1.06.05 1.4.06 4.12.06s3.06-.01 4.12-.06c1.07-.05 1.8-.22 2.43-.46.66-.26 1.21-.6 1.77-1.16.56-.55.9-1.11 1.16-1.77.25-.63.42-1.36.46-2.43.05-1.06.06-1.4.06-4.12s-.01-3.06-.06-4.12c-.05-1.07-.22-1.8-.46-2.43-.26-.66-.6-1.21-1.16-1.77-.55-.56-1.11-.9-1.77-1.16-.63-.25-1.36-.42-2.43-.46-1.06-.05-1.4-.06-4.12-.06z"></path>
                  <path d="M12 5.84c-2.9 0-5.26 2.35-5.26 5.26s2.35 5.26 5.26 5.26 5.26-2.35 5.26-5.26-2.35-5.26-5.26-5.26zm0 8.68a3.42 3.42 0 1 1 0-6.84 3.42 3.42 0 0 1 0 6.84z"></path>
                  <circle cx="17.4" cy="5.6" r="1.23"></circle>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="text-slate-300 hover:text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z"></path>
                  <path d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z"></path>
                  <path d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13.5V18C16 18.5523 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V13.5C19 11 18.5 9 16.5 9C14.5 9 13 10 13 10V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Courses Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Courses</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/courses/html-css" className="text-slate-300 hover:text-white">
                  HTML & CSS Fundamentals
                </Link>
              </li>
              <li>
                <Link href="/courses/javascript" className="text-slate-300 hover:text-white">
                  JavaScript Essentials
                </Link>
              </li>
              <li>
                <Link href="/courses/react" className="text-slate-300 hover:text-white">
                  React Development
                </Link>
              </li>
              <li>
                <Link href="/courses/nodejs" className="text-slate-300 hover:text-white">
                  Node.js Backend
                </Link>
              </li>
              <li>
                <Link href="/courses/fullstack" className="text-slate-300 hover:text-white">
                  Full Stack Bootcamp
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/instructors" className="text-slate-300 hover:text-white">
                  Our Instructors
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-slate-300 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-300 hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-slate-300 hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-300 hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-slate-300 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-300 mb-4 md:mb-0">© 2025 WebtiCode. All rights reserved.</p>
           
          </div>
        </div>
      </div>
    </footer>
  )
} 