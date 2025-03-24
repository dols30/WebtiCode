"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Course } from "@/lib/courses-data"
import { useAuth } from "@/lib/auth-context"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { enrollInCourse, isEnrolledInCourse } from "@/lib/auth-utils"
import PaymentModal from "./PaymentModal"

interface CourseCardProps {
  course: Course
}

export default function CourseCard({ course }: CourseCardProps) {
  const { user, isAuthenticated } = useAuth()
  const router = useRouter()
  const [enrolling, setEnrolling] = useState(false)
  const [isEnrolled, setIsEnrolled] = useState(
    user && course ? isEnrolledInCourse(user.id, course.id) : false
  )
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false)

  const handleEnroll = () => {
    if (!isAuthenticated) {
      // Redirect to login if not authenticated
      router.push(`/login?redirect=/courses`)
      return
    }
    
    if (!user) return
    
    // Open payment modal instead of direct enrollment
    setIsPaymentModalOpen(true)
  }
  
  const handlePaymentSuccess = () => {
    if (!user) return
    
    setEnrolling(true)
    
    try {
      // Enroll the user in the course
      const success = enrollInCourse(user.id, course.id)
      if (success) {
        setIsEnrolled(true)
      }
    } catch (error) {
      console.error("Error enrolling in course:", error)
    } finally {
      setEnrolling(false)
    }
  }
  
  // Function to get the badge color based on level
  const getBadgeClasses = () => {
    switch(course.level) {
      case 'Beginner':
        return 'bg-yellow-100 text-yellow-800';
      case 'Intermediate':
        return 'bg-blue-100 text-blue-800';
      case 'Advanced':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }
  
  return (
    <>
      <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
        <div className="relative h-48">
          <Image
            src={course.image}
            fill
            alt={course.title}
            className="object-cover"
          />
          <div className="absolute top-4 left-4">
            <span className={`${getBadgeClasses()} text-xs font-medium px-2.5 py-0.5 rounded`}>
              {course.level}
            </span>
          </div>
        </div>
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-slate-500">{course.duration} • {course.lessons} lessons</span>
            <span className="font-bold text-blue-600">${course.price}</span>
          </div>
          <h3 className="text-xl font-bold mb-2">{course.title}</h3>
          <p className="text-slate-600 mb-4">
            {course.description}
          </p>
          <div className="flex items-center mb-4">
            <Image
              src={course.instructor.avatar}
              width={32}
              height={32}
              alt={course.instructor.name}
              className="rounded-full mr-2"
            />
            <span className="text-sm text-slate-500">{course.instructor.name}</span>
          </div>
          
          {isEnrolled ? (
            <Button className="w-full" variant="outline">
              Continue Learning
            </Button>
          ) : (
            <Button 
              className="w-full" 
              onClick={handleEnroll} 
              disabled={enrolling}
            >
              {enrolling ? "Processing..." : "Enroll Now"}
            </Button>
          )}
        </div>
      </div>
      
      <PaymentModal 
        course={course}
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        onSuccess={handlePaymentSuccess}
      />
    </>
  )
}