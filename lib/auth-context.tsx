'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getAuthState, login as loginApi, register as registerApi, logout as logoutApi, AuthState, enrollInCourse } from './auth-utils';

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
  addEnrolledCourse: (courseId: string) => boolean;
}

const defaultContext: AuthContextType = {
  user: null,
  isAuthenticated: false,
  login: async () => {},
  register: async () => {},
  logout: () => {},
  isLoading: true,
  addEnrolledCourse: () => false
};

const AuthContext = createContext<AuthContextType>(defaultContext);

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [authState, setAuthState] = useState<AuthState>({ user: null, isAuthenticated: false });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize auth state from localStorage
    const state = getAuthState();
    setAuthState(state);
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const state = await loginApi(email, password);
      setAuthState(state);
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    try {
      const state = await registerApi(name, email, password);
      setAuthState(state);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    logoutApi();
    setAuthState({ user: null, isAuthenticated: false });
  };

  const addEnrolledCourse = (courseId: string): boolean => {
    if (!authState.user || !authState.user.id) return false;
    
    // Call the enrollInCourse utility function
    const success = enrollInCourse(authState.user.id, courseId);
    
    if (success && authState.user) {
      // Update the local state without requiring a reload
      setAuthState({
        ...authState,
        user: {
          ...authState.user,
          enrolledCourses: [...authState.user.enrolledCourses, courseId]
        }
      });
    }
    
    return success;
  };

  return (
    <AuthContext.Provider value={{ 
      ...authState, 
      login, 
      register, 
      logout, 
      isLoading, 
      addEnrolledCourse 
    }}>
      {children}
    </AuthContext.Provider>
  );
} 