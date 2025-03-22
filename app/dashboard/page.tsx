"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  BookOpen,
  Calendar,
  GraduationCap,
  Home,
  LayoutDashboard,
  LogOut,
  Settings,
  User,
} from "lucide-react"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Sidebar */}
      <aside className="hidden w-64 bg-slate-900 text-white md:flex flex-col">
        <div className="p-6">
          <Link href="/" className="flex items-center space-x-2 font-bold">
            <span className="text-xl">WebDev Academy</span>
          </Link>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          <Link href="/dashboard" className="flex items-center space-x-2 px-4 py-3 rounded-md bg-slate-800">
            <LayoutDashboard className="h-5 w-5" />
            <span>Dashboard</span>
          </Link>
          <Link
            href="/dashboard/courses"
            className="flex items-center space-x-2 px-4 py-3 rounded-md hover:bg-slate-800"
          >
            <BookOpen className="h-5 w-5" />
            <span>My Courses</span>
          </Link>
          <Link
            href="/dashboard/schedule"
            className="flex items-center space-x-2 px-4 py-3 rounded-md hover:bg-slate-800"
          >
            <Calendar className="h-5 w-5" />
            <span>Schedule</span>
          </Link>
          <Link
            href="/dashboard/progress"
            className="flex items-center space-x-2 px-4 py-3 rounded-md hover:bg-slate-800"
          >
            <BarChart className="h-5 w-5" />
            <span>Progress</span>
          </Link>
          <Link
            href="/dashboard/profile"
            className="flex items-center space-x-2 px-4 py-3 rounded-md hover:bg-slate-800"
          >
            <User className="h-5 w-5" />
            <span>Profile</span>
          </Link>
          <Link
            href="/dashboard/settings"
            className="flex items-center space-x-2 px-4 py-3 rounded-md hover:bg-slate-800"
          >
            <Settings className="h-5 w-5" />
            <span>Settings</span>
          </Link>
        </nav>
        <div className="p-4 border-t border-slate-800">
          <Button variant="ghost" className="w-full justify-start text-white">
            <LogOut className="mr-2 h-5 w-5" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="sticky top-0 z-10 border-b bg-white">
          <div className="flex h-16 items-center justify-between px-4 md:px-6">
            <div className="flex items-center md:hidden">
              <Button variant="ghost" size="icon">
                <Home className="h-5 w-5" />
                <span className="sr-only">Home</span>
              </Button>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Button variant="ghost" size="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                  </svg>
                  <span className="sr-only">Notifications</span>
                </Button>
                <span className="absolute right-1 top-1 flex h-2 w-2 rounded-full bg-red-600"></span>
              </div>
              <Button variant="ghost" size="icon" className="rounded-full">
                <img
                  src="/placeholder.svg?height=32&width=32"
                  width="32"
                  height="32"
                  className="rounded-full"
                  alt="Avatar"
                />
                <span className="sr-only">Profile</span>
              </Button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-4 md:p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <Button>
              <GraduationCap className="mr-2 h-4 w-4" />
              Enroll in a Course
            </Button>
          </div>

          <Tabs defaultValue="overview" className="space-y-4" onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Courses</CardTitle>
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">4</div>
                    <p className="text-xs text-muted-foreground">2 in progress, 2 completed</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Hours Spent</CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">36.5</div>
                    <p className="text-xs text-muted-foreground">+20% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Assignments</CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" />
                      <path d="m9 9 6 6" />
                      <path d="m15 9-6 6" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">12/15</div>
                    <p className="text-xs text-muted-foreground">3 pending submissions</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Overall Progress</CardTitle>
                    <BarChart className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">78%</div>
                    <div className="mt-2 h-2 w-full rounded-full bg-slate-200">
                      <div className="h-full w-[78%] rounded-full bg-blue-600" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="lg:col-span-4">
                  <CardHeader>
                    <CardTitle>Current Courses</CardTitle>
                    <CardDescription>Your enrolled courses and progress</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">HTML & CSS Fundamentals</p>
                          <p className="text-sm text-muted-foreground">12 modules • 24 lessons</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">92%</p>
                          <div className="mt-1 h-2 w-24 rounded-full bg-slate-200">
                            <div className="h-full w-[92%] rounded-full bg-green-600" />
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">JavaScript Essentials</p>
                          <p className="text-sm text-muted-foreground">10 modules • 32 lessons</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">65%</p>
                          <div className="mt-1 h-2 w-24 rounded-full bg-slate-200">
                            <div className="h-full w-[65%] rounded-full bg-yellow-600" />
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">React Fundamentals</p>
                          <p className="text-sm text-muted-foreground">8 modules • 20 lessons</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">45%</p>
                          <div className="mt-1 h-2 w-24 rounded-full bg-slate-200">
                            <div className="h-full w-[45%] rounded-full bg-blue-600" />
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Node.js Backend Development</p>
                          <p className="text-sm text-muted-foreground">6 modules • 18 lessons</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">10%</p>
                          <div className="mt-1 h-2 w-24 rounded-full bg-slate-200">
                            <div className="h-full w-[10%] rounded-full bg-red-600" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="lg:col-span-3">
                  <CardHeader>
                    <CardTitle>Upcoming Sessions</CardTitle>
                    <CardDescription>Your scheduled learning sessions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                          <Calendar className="h-5 w-5" />
                        </div>
                        <div className="ml-4 space-y-1">
                          <p className="text-sm font-medium">JavaScript Advanced Concepts</p>
                          <p className="text-xs text-muted-foreground">Today, 2:00 PM - 4:00 PM</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                          <Calendar className="h-5 w-5" />
                        </div>
                        <div className="ml-4 space-y-1">
                          <p className="text-sm font-medium">React Hooks Workshop</p>
                          <p className="text-xs text-muted-foreground">Tomorrow, 10:00 AM - 12:00 PM</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
                          <Calendar className="h-5 w-5" />
                        </div>
                        <div className="ml-4 space-y-1">
                          <p className="text-sm font-medium">MongoDB Database Design</p>
                          <p className="text-xs text-muted-foreground">Mar 24, 3:00 PM - 5:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="analytics" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Analytics</CardTitle>
                  <CardDescription>View your learning analytics and progress over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center border rounded-md">
                    <p className="text-muted-foreground">Analytics charts would be displayed here</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="reports" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Reports</CardTitle>
                  <CardDescription>View and download your learning reports</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center border rounded-md">
                    <p className="text-muted-foreground">Reports would be displayed here</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="notifications" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Notifications</CardTitle>
                  <CardDescription>Manage your notification preferences</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center border rounded-md">
                    <p className="text-muted-foreground">Notifications would be displayed here</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

