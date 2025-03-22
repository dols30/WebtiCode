import { NextResponse } from "next/server"

// This is a mock authentication API
// In a real application, you would use a proper authentication system
// with password hashing, JWT tokens, etc.

// Mock user database
const users = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    password: "password123", // In a real app, this would be hashed
  },
]

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, password } = body

    // Simple validation
    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
    }

    // Check if user exists (in a real app, you would query your database)
    const user = users.find((u) => u.email === email)

    if (!user) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }

    // Check if password matches (in a real app, you would compare hashed passwords)
    if (user.password !== password) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }

    // Create a user object without the password to return
    const userWithoutPassword = {
      id: user.id,
      name: user.name,
      email: user.email,
    }

    // In a real app, you would generate a JWT token here
    return NextResponse.json({
      user: userWithoutPassword,
      token: "mock-jwt-token",
    })
  } catch (error) {
    console.error("Authentication error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

