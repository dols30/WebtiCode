"use client"

import type React from "react"

// This is a simple client-side auth utility
// In a real application, you would use a proper authentication library
// like NextAuth.js or a custom solution with secure cookies/JWT

import { useState, useEffect, createContext, useContext } from "react"

// In a real application, this would connect to a backend/database
// For demonstration purposes, we'll use localStorage

export interface User {
  id: string;
  name: string;
  email: string;
  enrolledCourses: string[];
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

// Mock users for demonstration
const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    enrolledCourses: ['course-1', 'course-2']
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    enrolledCourses: ['course-3']
  }
];

// Local storage keys
const AUTH_KEY = 'webticode_auth';

// Get initial auth state from localStorage
export function getAuthState(): AuthState {
  if (typeof window === 'undefined') {
    return { user: null, isAuthenticated: false };
  }
  
  const storedAuth = localStorage.getItem(AUTH_KEY);
  if (!storedAuth) {
    return { user: null, isAuthenticated: false };
  }
  
  try {
    const authState = JSON.parse(storedAuth) as AuthState;
    return authState;
  } catch (error) {
    console.error('Failed to parse auth state', error);
    return { user: null, isAuthenticated: false };
  }
}

// Login function - in a real app this would call an API
export async function login(email: string, password: string): Promise<AuthState> {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Find user by email (in a real app, you would verify credentials)
  const user = mockUsers.find(u => u.email.toLowerCase() === email.toLowerCase());
  
  if (!user) {
    throw new Error('Invalid email or password');
  }
  
  const authState: AuthState = { user, isAuthenticated: true };
  
  // Save to localStorage
  localStorage.setItem(AUTH_KEY, JSON.stringify(authState));
  
  return authState;
}

// Register function - in a real app this would call an API
export async function register(name: string, email: string, password: string): Promise<AuthState> {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Check if user already exists
  if (mockUsers.some(u => u.email.toLowerCase() === email.toLowerCase())) {
    throw new Error('User with this email already exists');
  }
  
  // Create new user
  const newUser: User = {
    id: `${mockUsers.length + 1}`,
    name,
    email,
    enrolledCourses: []
  };
  
  // In a real app, you would add the user to a database
  mockUsers.push(newUser);
  
  const authState: AuthState = { user: newUser, isAuthenticated: true };
  
  // Save to localStorage
  localStorage.setItem(AUTH_KEY, JSON.stringify(authState));
  
  return authState;
}

// Logout function
export function logout(): void {
  localStorage.removeItem(AUTH_KEY);
}

// Get user courses
export function getUserCourses(userId: string): string[] {
  const user = mockUsers.find(u => u.id === userId);
  return user?.enrolledCourses || [];
}

// Enroll in a course
export function enrollInCourse(userId: string, courseId: string): boolean {
  const userIndex = mockUsers.findIndex(u => u.id === userId);
  
  if (userIndex === -1) {
    return false;
  }
  
  // Check if already enrolled
  if (mockUsers[userIndex].enrolledCourses.includes(courseId)) {
    return true;
  }
  
  // Add course to user's enrolled courses
  mockUsers[userIndex].enrolledCourses.push(courseId);
  
  // Update localStorage if this is the current user
  const authState = getAuthState();
  if (authState.user?.id === userId) {
    authState.user = mockUsers[userIndex];
    localStorage.setItem(AUTH_KEY, JSON.stringify(authState));
  }
  
  return true;
}

// Check if a user is enrolled in a specific course
export function isEnrolledInCourse(userId: string, courseId: string): boolean {
  const user = mockUsers.find(u => u.id === userId);
  return user?.enrolledCourses.includes(courseId) || false;
}

