import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function FAQPage() {
  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Find answers to common questions about our courses, instructors, and learning methods.
        </p>
      </div>

      <div className="grid gap-6 mb-12 max-w-4xl mx-auto">
        {/* FAQ Item 1 */}
        <div className="border border-slate-200 rounded-lg shadow-sm">
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">What programming languages do you teach?</h3>
            <p className="text-slate-600">
              We focus primarily on web development technologies including HTML, CSS, JavaScript, TypeScript, 
              React, Next.js, Node.js, and related frameworks and libraries. We also cover database 
              technologies like MongoDB and SQL, as well as deployment and DevOps fundamentals.
            </p>
          </div>
        </div>

        {/* FAQ Item 2 */}
        <div className="border border-slate-200 rounded-lg shadow-sm">
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Do I need prior coding experience?</h3>
            <p className="text-slate-600">
              For our beginner courses, no prior experience is needed. We start from the absolute basics
              and gradually build up your skills. For intermediate and advanced courses, we recommend having
              foundational knowledge in web development concepts and basic programming principles.
            </p>
          </div>
        </div>

        {/* FAQ Item 3 */}
        <div className="border border-slate-200 rounded-lg shadow-sm">
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">How long does it take to complete a course?</h3>
            <p className="text-slate-600">
              Course durations vary based on complexity and depth. Our introductory courses typically take 
              4-6 weeks to complete, while comprehensive bootcamps may run for 12-16 weeks. All courses are 
              self-paced, allowing you to learn according to your own schedule.
            </p>
          </div>
        </div>

        {/* FAQ Item 4 */}
        <div className="border border-slate-200 rounded-lg shadow-sm">
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">What is the difference between virtual, hybrid, and in-person learning?</h3>
            <p className="text-slate-600">
              <span className="font-medium">Virtual learning</span>: 100% online with recorded lectures, live Q&A sessions, and online project reviews.<br />
              <span className="font-medium">Hybrid learning</span>: Combines online lectures with in-person workshops and collaborative sessions.<br />
              <span className="font-medium">In-person learning</span>: Traditional classroom environment with direct instructor interaction, hands-on projects, and peer collaboration.
            </p>
          </div>
        </div>

        {/* FAQ Item 5 */}
        <div className="border border-slate-200 rounded-lg shadow-sm">
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Do you provide job placement assistance?</h3>
            <p className="text-slate-600">
              Yes! Our career services include resume reviews, portfolio development, interview preparation, 
              and connections with our hiring partners. While we cannot guarantee employment, our graduates 
              have a high success rate in finding relevant positions within 3-6 months of completing our programs.
            </p>
          </div>
        </div>

        {/* FAQ Item 6 */}
        <div className="border border-slate-200 rounded-lg shadow-sm">
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Are there any prerequisites for enrolling?</h3>
            <p className="text-slate-600">
              For beginner courses, you only need a computer with internet access and basic computer literacy. 
              For advanced courses, specific prerequisites are listed on the individual course pages. We recommend 
              reviewing these requirements before enrolling to ensure you're prepared for the material.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center bg-slate-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-6">
          If you couldn't find the answer to your question, feel free to contact our support team. 
          We're here to help you with any inquiries about our courses, teaching methods, or enrollment process.
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="outline">Contact Support</Button>
          <Button>Schedule a Call</Button>
        </div>
      </div>
    </div>
  )
} 