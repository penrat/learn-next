// src/store/usePortfolioStore.ts
import { create } from 'zustand'

export interface Student {
  id: string
  firstName: string
  lastName: string
  address: string
  phone: string
  school: string
  gpa: number
  talent?: string
  reason?: string
  major?: string
  university?: string
  photoUrl?: string
}

interface PortfolioState {
  students: Student[]
  addStudent: (student: Student) => void
}

export const usePortfolioStore = create<PortfolioState>((set) => ({
  students: [],
  addStudent: (student) =>
    set((state) => ({ students: [...state.students, student] })),
}))
