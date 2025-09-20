// src/app/teacher/[id]/page.tsx
"use client"

import { useParams, useRouter } from 'next/navigation'
// Update the import path if the component is located elsewhere, for example:
// Update the import path to the correct relative location of StudentDetail
import StudentDetail from '../../../components/StudentDetail'
// Or, if the correct path is different, adjust accordingly:
// import StudentDetail from '../../../components/StudentDetail'

export default function StudentDetailPage() {
  const { id } = useParams<{ id: string }>()
  const router = useRouter()

  if (!id) {
    return <p>ไม่มี ID</p>
  }

  return (
    <div className="p-6">
      <button
        onClick={() => router.push('/teacher')}
        className="mb-4 px-4 py-2 bg-gray-300 rounded"
      >
        ← กลับไปหน้ารายชื่อ
      </button>
      <StudentDetail id={id} />
    </div>
  )
}
