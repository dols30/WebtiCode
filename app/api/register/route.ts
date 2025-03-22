import { NextResponse } from "next/server"

// This is a mock registration API
// In a real application, you would use a proper authentication system
// with password hashing, email verification, etc.

// Mock user database (same as in auth.ts)
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
    const { name, email, password } = body

    // Simple validation
    if (!name || !email || !password) {
      return NextResponse.json({ error: "Name, email, and password are required" }, { status: 400 })
    }

    // Check if user already exists
    const existingUser = users.find((u) => u.email === email)

    if (existingUser) {
      return NextResponse.json({ error: "User with this email already exists" }, { status: 409 })
    }

    // Create new user (in a real app, you would save to your database)
    const newUser = {
      id: (users.length + 1).toString(),
      name,
      email,
      password, // In a real app, this would be hashed
    }

    // Add user to our mock database
    users.push(newUser)

    // Create a user object without the password to return
    const userWithoutPassword = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
    }

    return NextResponse.json({
      user: userWithoutPassword,
      message: "User registered successfully",
    })
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

