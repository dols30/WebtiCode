"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import CourseCard from "@/components/CourseCard"
import { courses } from "@/lib/courses-data"

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  
  // Get all unique categories
  const categories = ["All Courses", ...Array.from(new Set(courses.map(course => course.category)))]
  
  // Filter courses based on selected category
  const filteredCourses = selectedCategory && selectedCategory !== "All Courses"
    ? courses.filter(course => course.category === selectedCategory)
    : courses
  
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
        {categories.map(category => (
          <Button 
            key={category}
            variant={selectedCategory === category || (!selectedCategory && category === "All Courses") ? "default" : "outline"} 
            className="rounded-full"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {filteredCourses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
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