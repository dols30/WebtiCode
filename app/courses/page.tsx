import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CoursesPage() {
  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Courses</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Discover our comprehensive web development curriculum designed to take you from beginner to professional.
        </p>
      </div>

      {/* Course Categories */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <Button variant="outline" className="rounded-full">All Courses</Button>
        <Button variant="outline" className="rounded-full">Frontend Development</Button>
        <Button variant="outline" className="rounded-full">Backend Development</Button>
        <Button variant="outline" className="rounded-full">Full Stack</Button>
        <Button variant="outline" className="rounded-full">UI/UX Design</Button>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {/* Course 1 */}
        <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          <div className="relative h-48">
            <Image
              src="/placeholder.jpg"
              fill
              alt="HTML & CSS Fundamentals"
              className="object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">Beginner</span>
            </div>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-slate-500">4 weeks • 16 lessons</span>
              <span className="font-bold text-blue-600">$199</span>
            </div>
            <h3 className="text-xl font-bold mb-2">HTML & CSS Fundamentals</h3>
            <p className="text-slate-600 mb-4">
              Learn the building blocks of web development. Master HTML5 structure and CSS3 styling to create responsive websites.
            </p>
            <div className="flex items-center mb-4">
              <Image
                src="/instructor-1.jpg"
                width={32}
                height={32}
                alt="Dolraj Bashyal"
                className="rounded-full mr-2"
              />
              <span className="text-sm text-slate-500">Dolraj Bashyal</span>
            </div>
            <Button className="w-full">Enroll Now</Button>
          </div>
        </div>

        {/* Course 2 */}
        <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          <div className="relative h-48">
            <Image
              src="/placeholder.jpg"
              fill
              alt="JavaScript Essentials"
              className="object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Intermediate</span>
            </div>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-slate-500">6 weeks • 24 lessons</span>
              <span className="font-bold text-blue-600">$299</span>
            </div>
            <h3 className="text-xl font-bold mb-2">JavaScript Essentials</h3>
            <p className="text-slate-600 mb-4">
              Dive into modern JavaScript. Learn syntax, DOM manipulation, event handling, and ES6+ features for interactive web apps.
            </p>
            <div className="flex items-center mb-4">
              <Image
                src="/instructor-1.jpg"
                width={32}
                height={32}
                alt="Dolraj Bashyal"
                className="rounded-full mr-2"
              />
              <span className="text-sm text-slate-500">Dolraj Bashyal</span>
            </div>
            <Button className="w-full">Enroll Now</Button>
          </div>
        </div>

        {/* Course 3 */}
        <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          <div className="relative h-48">
            <Image
              src="/placeholder.jpg"
              fill
              alt="React Development"
              className="object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">Advanced</span>
            </div>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-slate-500">8 weeks • 32 lessons</span>
              <span className="font-bold text-blue-600">$399</span>
            </div>
            <h3 className="text-xl font-bold mb-2">React Development</h3>
            <p className="text-slate-600 mb-4">
              Master React.js framework. Build complex UIs with components, hooks, state management, and modern React patterns.
            </p>
            <div className="flex items-center mb-4">
              <Image
                src="/instructor-1.jpg"
                width={32}
                height={32}
                alt="Dolraj Bashyal"
                className="rounded-full mr-2"
              />
              <span className="text-sm text-slate-500">Dolraj Bashyal</span>
            </div>
            <Button className="w-full">Enroll Now</Button>
          </div>
        </div>

        {/* Course 4 */}
        <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          <div className="relative h-48">
            <Image
              src="/placeholder.jpg"
              fill
              alt="UI/UX Design Principles"
              className="object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">Beginner</span>
            </div>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-slate-500">6 weeks • 24 lessons</span>
              <span className="font-bold text-blue-600">$299</span>
            </div>
            <h3 className="text-xl font-bold mb-2">UI/UX Design Principles</h3>
            <p className="text-slate-600 mb-4">
              Learn design fundamentals for the web. Master user experience principles, wireframing, prototyping, and usability testing.
            </p>
            <div className="flex items-center mb-4">
              <Image
                src="/instructor-2.jpg"
                width={32}
                height={32}
                alt="Sarah Johnson"
                className="rounded-full mr-2"
              />
              <span className="text-sm text-slate-500">Sarah Johnson</span>
            </div>
            <Button className="w-full">Enroll Now</Button>
          </div>
        </div>

        {/* Course 5 */}
        <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          <div className="relative h-48">
            <Image
              src="/placeholder.jpg"
              fill
              alt="Node.js Backend Development"
              className="object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Intermediate</span>
            </div>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-slate-500">8 weeks • 32 lessons</span>
              <span className="font-bold text-blue-600">$399</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Node.js Backend Development</h3>
            <p className="text-slate-600 mb-4">
              Build scalable server-side applications. Learn Express.js, RESTful APIs, MongoDB integration, and authentication.
            </p>
            <div className="flex items-center mb-4">
              <Image
                src="/instructor-3.jpg"
                width={32}
                height={32}
                alt="Michael Chen"
                className="rounded-full mr-2"
              />
              <span className="text-sm text-slate-500">Michael Chen</span>
            </div>
            <Button className="w-full">Enroll Now</Button>
          </div>
        </div>

        {/* Course 6 */}
        <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          <div className="relative h-48">
            <Image
              src="/placeholder.jpg"
              fill
              alt="Full Stack Web Development Bootcamp"
              className="object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">Advanced</span>
            </div>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-slate-500">12 weeks • 48 lessons</span>
              <span className="font-bold text-blue-600">$999</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Full Stack Web Development Bootcamp</h3>
            <p className="text-slate-600 mb-4">
              Comprehensive program covering both frontend and backend. Build complete web applications from scratch to deployment.
            </p>
            <div className="flex items-center mb-4">
              <div className="flex -space-x-2">
                <Image 
                  src="/instructor-1.jpg" 
                  width={32} 
                  height={32} 
                  alt="Instructor" 
                  className="rounded-full border-2 border-white" 
                />
                <Image 
                  src="/instructor-3.jpg" 
                  width={32} 
                  height={32} 
                  alt="Instructor" 
                  className="rounded-full border-2 border-white" 
                />
              </div>
              <span className="text-sm text-slate-500 ml-2">Multiple Instructors</span>
            </div>
            <Button className="w-full">Enroll Now</Button>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-slate-900 text-white rounded-lg p-8 flex flex-col md:flex-row items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">Not sure which course to take?</h2>
          <p className="text-slate-300 max-w-2xl">
            Schedule a free consultation with our advisors to discuss your goals and find the perfect learning path.
          </p>
        </div>
        <Button className="mt-6 md:mt-0 bg-white text-slate-900 hover:bg-slate-100">
          Book a Free Consultation
        </Button>
      </div>
    </div>
  )
} 