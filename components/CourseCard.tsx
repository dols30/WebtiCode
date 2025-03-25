"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { Course } from "@/lib/courses-data"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Check, Loader2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface CourseCardProps {
  course: Course
}

export default function CourseCard({ course }: CourseCardProps) {
  const [isEnrollmentModalOpen, setIsEnrollmentModalOpen] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [enrollmentComplete, setEnrollmentComplete] = useState(false)
  const { isAuthenticated, user, logout, addEnrolledCourse } = useAuth()
  const router = useRouter()

  // Add payment form state
  const [paymentDetails, setPaymentDetails] = useState({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvc: ""
  })

  // Handle payment form input changes
  const handlePaymentInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setPaymentDetails(prev => ({
      ...prev,
      [id]: value
    }))
  }

  // Add form validation
  const isFormValid = () => {
    return paymentDetails.cardName.trim() !== "" && 
           paymentDetails.cardNumber.trim().length >= 16 &&
           paymentDetails.expiry.trim().length >= 5 &&
           paymentDetails.cvc.trim().length >= 3
  }

  // Check if user is already enrolled
  const isEnrolled = user?.enrolledCourses?.includes(course.id) || false

  const handleEnrollClick = () => {
    if (!isAuthenticated) {
      router.push('/login')
      return
    }
    setIsEnrollmentModalOpen(true)
  }

  const handleCompleteEnrollment = () => {
    if (!isFormValid()) {
      alert("Please fill in all payment details correctly");
      return;
    }
    
    setIsProcessing(true)
    
    // Simulate payment processing
    setTimeout(() => {
      // Use the addEnrolledCourse function from the auth context
      const success = addEnrolledCourse(course.id);
      
      if (success) {
        setIsProcessing(false)
        setEnrollmentComplete(true)
        
        setTimeout(() => {
          setIsEnrollmentModalOpen(false)
          setEnrollmentComplete(false)
          // Reset payment form after successful enrollment
          setPaymentDetails({
            cardName: "",
            cardNumber: "",
            expiry: "",
            cvc: ""
          })
          // We don't need a full page reload since the context updates the state
          router.refresh() // Just refresh router data if needed
        }, 2000)
      } else {
        // Handle enrollment failure
        setIsProcessing(false)
        alert("Enrollment failed. Please try again.")
      }
    }, 1500)
  }

  return (
    <>
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-border/60 hover:border-primary/20">
        <div className="relative">
          <div className="aspect-video w-full overflow-hidden">
            <Image
              src={course.image || '/placeholder-course.jpg'}
              alt={course.title}
              width={500}
              height={300}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="absolute top-3 right-3">
            <Badge className={`${getLevelBadgeColor(course.level)}`}>
              {course.level}
            </Badge>
          </div>
        </div>
        <CardContent className="p-5">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-bold text-xl line-clamp-2 group-hover:text-primary transition-colors">
              {course.title}
            </h3>
            <div className="text-lg font-bold text-primary">
              ${course.price}
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {course.description}
          </p>
          
          <div className="flex items-center gap-2 mb-4">
            <div className="flex-shrink-0 h-8 w-8 rounded-full overflow-hidden border border-border">
              <Image
                src={course.instructor.avatar}
                alt={course.instructor.name}
                width={32}
                height={32}
                className="h-full w-full object-cover"
              />
            </div>
            <span className="text-sm font-medium">{course.instructor.name}</span>
          </div>
          
          <div className="flex flex-wrap gap-1.5 mb-4">
            <Badge variant="outline" className="bg-primary/5 text-primary">
              {course.lessons} lessons
            </Badge>
            <Badge variant="outline" className="bg-primary/5 text-primary">
              {course.duration}
            </Badge>
          </div>
          
          <div className="mt-auto">
            <Button 
              onClick={handleEnrollClick} 
              className="w-full bg-primary text-white hover:bg-primary/90"
              disabled={isEnrolled}
            >
              {isEnrolled ? 'Enrolled' : 'Enroll Now'}
            </Button>
          </div>
        </CardContent>
      </Card>

      <Dialog open={isEnrollmentModalOpen} onOpenChange={setIsEnrollmentModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-primary">Complete Enrollment</DialogTitle>
            <DialogDescription>
              You are enrolling in <span className="font-medium">{course.title}</span>
            </DialogDescription>
          </DialogHeader>
          {enrollmentComplete ? (
            <div className="text-center py-6">
              <div className="mx-auto w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <Check className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-medium text-lg mb-2">Enrollment Successful!</h3>
              <p className="text-muted-foreground">You have been enrolled in this course.</p>
            </div>
          ) : (
            <>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="cardName">Name on Card</Label>
                  <Input 
                    id="cardName" 
                    placeholder="Dolraj"
                    value={paymentDetails.cardName}
                    onChange={handlePaymentInputChange}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input 
                    id="cardNumber" 
                    placeholder="1234 5678 9012 3456"
                    value={paymentDetails.cardNumber}
                    onChange={handlePaymentInputChange}
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="expiry">Expiration Date</Label>
                    <Input 
                      id="expiry" 
                      placeholder="MM/YY"
                      value={paymentDetails.expiry}
                      onChange={handlePaymentInputChange}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="cvc">CVC</Label>
                    <Input 
                      id="cvc" 
                      placeholder="123"
                      value={paymentDetails.cvc}
                      onChange={handlePaymentInputChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button 
                  variant="outline" 
                  onClick={() => setIsEnrollmentModalOpen(false)}
                  className="border-gray-300 hover:bg-gray-100"
                >
                  Cancel
                </Button>
                <Button 
                  onClick={handleCompleteEnrollment} 
                  disabled={isProcessing || !isFormValid()}
                  className="bg-primary text-white hover:bg-primary/90 transition-colors"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    `Pay $${course.price}`
                  )}
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

function getLevelBadgeColor(level: string) {
  switch (level) {
    case 'Beginner':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 hover:bg-green-200';
    case 'Intermediate':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200';
    case 'Advanced':
      return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300 hover:bg-purple-200';
    default:
      return 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300';
  }
}