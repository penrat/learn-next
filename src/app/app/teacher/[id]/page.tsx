"use client"

import { useRouter, useParams } from 'next/navigation'
import { usePortfolioStore } from '../store/usePortfolioStore'

export default function StudentDetailPage() {
  const { id } = useParams<{ id: string }>()
  const router = useRouter()
  const student = usePortfolioStore((s) => s.students.find((st) => st.id === id))

  if (!student) {
    return (
      <div className="p-6">
        <p className="text-red-500">ไม่พบนักเรียนที่มี ID นี้</p>
        <button
          onClick={() => router.push('/teacher')}
          className="mt-3 px-4 py-2 bg-blue-500 text-white rounded"
        >
          กลับไปหน้ารายชื่อ
        </button>
      </div>
    )
  }

  return (
    <div className="p-6 max-w-2xl">
      <button
        onClick={() => router.push('/teacher')}
        className="mb-4 px-4 py-2 bg-gray-300 rounded"
      >
        ← กลับไปหน้ารายชื่อ
      </button>

      <h2 className="text-2xl font-bold mb-4">
        {student.firstName} {student.lastName}
      </h2>

      {student.photoUrl && (
        <img
          src={student.photoUrl}
          alt="รูปนักเรียน"
          className="mb-4 w-48 h-48 object-cover rounded shadow"
        />
      )}

      <div className="space-y-2">
        <p><strong>ที่อยู่:</strong> {student.address}</p>
        <p><strong>เบอร์โทร:</strong> {student.phone}</p>
        <p><strong>โรงเรียน:</strong> {student.school}</p>
        <p><strong>GPA:</strong> {student.gpa.toFixed(2)}</p>
        <p><strong>สาขาที่เลือก:</strong> {student.major}</p>
        <p><strong>มหาวิทยาลัย:</strong> {student.university}</p>
        <p><strong>ความสามารถพิเศษ:</strong> {student.talent}</p>
        <p><strong>เหตุผลในการสมัคร:</strong> {student.reason}</p>
      </div>
    </div>
  )
}
