"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Course } from "@/lib/courses-data"
import { Loader2, CheckCircle } from "lucide-react"

interface PaymentModalProps {
  course: Course
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
}

export default function PaymentModal({ course, isOpen, onClose, onSuccess }: PaymentModalProps) {
  const [step, setStep] = useState<'card-details' | 'processing' | 'success'>('card-details')
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: ''
  })
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // In a real app, you would validate the form data here
    
    // Simulate payment processing
    setStep('processing')
    
    // Simulate API call
    setTimeout(() => {
      setStep('success')
      
      // After showing success for 2 seconds, close the modal and notify parent
      setTimeout(() => {
        onSuccess()
        onClose()
        setStep('card-details') // Reset for next time
        setFormData({
          cardNumber: '',
          cardName: '',
          expiry: '',
          cvv: ''
        })
      }, 2000)
    }, 2000)
  }
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Complete Your Enrollment</DialogTitle>
          <DialogDescription>
            {step === 'card-details' && `You're enrolling in ${course.title} for $${course.price}.`}
            {step === 'processing' && "Processing your payment..."}
            {step === 'success' && "Payment successful!"}
          </DialogDescription>
        </DialogHeader>
        
        {step === 'card-details' && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="cardName" className="text-sm font-medium">Cardholder Name</label>
              <input 
                id="cardName" 
                name="cardName" 
                value={formData.cardName}
                onChange={handleChange}
                placeholder="Dolraj Bashyal"
                required
                className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="cardNumber" className="text-sm font-medium">Card Number</label>
              <input 
                id="cardNumber" 
                name="cardNumber" 
                value={formData.cardNumber}
                onChange={handleChange}
                placeholder="4242 4242 4242 4242"
                required
                className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="expiry" className="text-sm font-medium">Expiry Date</label>
                <input 
                  id="expiry" 
                  name="expiry" 
                  value={formData.expiry}
                  onChange={handleChange}
                  placeholder="MM/YY"
                  required
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="cvv" className="text-sm font-medium">CVV</label>
                <input 
                  id="cvv" 
                  name="cvv" 
                  value={formData.cvv}
                  onChange={handleChange}
                  placeholder="123"
                  required
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm"
                />
              </div>
            </div>
            
            <DialogFooter className="mt-6">
              <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
              <Button type="submit">Pay ${course.price}</Button>
            </DialogFooter>
          </form>
        )}
        
        {step === 'processing' && (
          <div className="flex flex-col items-center justify-center py-8">
            <Loader2 className="h-12 w-12 animate-spin text-blue-600 mb-4" />
            <p>Processing your payment. Please don't close this window.</p>
          </div>
        )}
        
        {step === 'success' && (
          <div className="flex flex-col items-center justify-center py-8">
            <CheckCircle className="h-12 w-12 text-green-600 mb-4" />
            <p className="text-xl font-semibold mb-2">Payment Successful!</p>
            <p className="text-center">You are now enrolled in {course.title}.</p>
            <p className="text-center text-sm text-slate-500 mt-2">
              A confirmation email has been sent to your email address.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
} 