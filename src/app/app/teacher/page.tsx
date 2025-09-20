"use client"

import Link from 'next/link'
// Make sure the path is correct; update as needed if the file is elsewhere
import { usePortfolioStore } from '../../store/usePortfolioStore'
import { useState } from 'react'

export default function TeacherPage() {
  const students = usePortfolioStore((s) => s.students)
  const [sortBy, setSortBy] = useState<'name' | 'gpa'>('name')

  const sorted = [...students].sort((a, b) => {
    if (sortBy === 'gpa') return b.gpa - a.gpa
    return a.firstName.localeCompare(b.firstName)
  })

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">รายชื่อนักเรียน</h1>
      <div className="mb-4">
        <button onClick={() => setSortBy('name')} className={`px-3 py-1 border mr-2 ${sortBy==='name' ? 'bg-gray-200' : ''}`}>เรียงตามชื่อ</button>
        <button onClick={() => setSortBy('gpa')} className={`px-3 py-1 border ${sortBy==='gpa' ? 'bg-gray-200' : ''}`}>เรียงตาม GPA</button>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">ชื่อ</th>
            <th className="border p-2">นามสกุล</th>
            <th className="border p-2">GPA</th>
            <th className="border p-2">ดูรายละเอียด</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((s) => (
            <tr key={s.id}>
              <td className="border p-2">{s.firstName}</td>
              <td className="border p-2">{s.lastName}</td>
              <td className="border p-2">{s.gpa.toFixed(2)}</td>
              <td className="border p-2">
                <Link href={`/teacher/${s.id}`} className="text-blue-600">ดูรายละเอียด</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
