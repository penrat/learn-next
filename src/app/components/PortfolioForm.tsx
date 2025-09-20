"use client"

import { useForm } from 'react-hook-form'
import { usePortfolioStore } from '../store/usePortfolioStore'
import { v4 as uuidv4 } from 'uuid'

type FormData = {
  firstName: string
  lastName: string
  address: string
  phone: string
  school: string
  gpa: string
  talent?: string
  reason?: string
  major?: string
  university?: string
  photo?: FileList
}

export default function PortfolioForm() {
  const addStudent = usePortfolioStore((s) => s.addStudent)
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    let photoUrl: string | undefined = undefined
    if (data.photo && data.photo.length > 0) {
      const file = data.photo[0]
      photoUrl = URL.createObjectURL(file)
    }

    addStudent({
      id: uuidv4(),
      firstName: data.firstName,
      lastName: data.lastName,
      address: data.address,
      phone: data.phone,
      school: data.school,
      gpa: parseFloat(data.gpa),
      talent: data.talent ?? '',
      reason: data.reason ?? '',
      major: data.major ?? '',
      university: data.university ?? '',
      photoUrl,
    })

    reset()
    alert('บันทึกข้อมูลเรียบร้อยแล้ว')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 max-w-xl">
      <input
        {...register('firstName', { required: 'กรุณากรอกชื่อ' })}
        placeholder="ชื่อ"
        className="border p-2"
      />
      {errors.firstName && <p className="text-red-600">{errors.firstName.message}</p>}

      <input
        {...register('lastName', { required: 'กรุณากรอกนามสกุล' })}
        placeholder="นามสกุล"
        className="border p-2"
      />
      {errors.lastName && <p className="text-red-600">{errors.lastName.message}</p>}

      <input
        {...register('address', { required: 'กรุณากรอกที่อยู่' })}
        placeholder="ที่อยู่"
        className="border p-2"
      />
      {errors.address && <p className="text-red-600">{errors.address.message}</p>}

      <input
        {...register('phone', { required: 'กรุณากรอกเบอร์โทร', pattern: { value: /^[0-9]{10}$/, message: 'เบอร์โทรต้องมี 10 หลัก' } })}
        placeholder="เบอร์โทร"
        className="border p-2"
      />
      {errors.phone && <p className="text-red-600">{errors.phone.message}</p>}

      <input
        {...register('school', { required: 'กรุณากรอกโรงเรียน' })}
        placeholder="โรงเรียน"
        className="border p-2"
      />
      {errors.school && <p className="text-red-600">{errors.school.message}</p>}

      <input
        type="number"
        step="0.01"
        {...register('gpa', { required: 'กรุณากรอก GPA', min: { value: 0, message: 'GPA อย่างน้อย 0' }, max: { value: 4, message: 'GPA ไม่เกิน 4' } })}
        placeholder="GPA (0.00-4.00)"
        className="border p-2"
      />
      {errors.gpa && <p className="text-red-600">{errors.gpa.message}</p>}

      <input
        {...register('talent')}
        placeholder="ความสามารถพิเศษ"
        className="border p-2"
      />

      <textarea
        {...register('reason')}
        placeholder="เหตุผลในการสมัคร"
        className="border p-2"
      />

      <input
        {...register('major')}
        placeholder="สาขาที่เลือก"
        className="border p-2"
      />

      <input
        {...register('university')}
        placeholder="มหาวิทยาลัย"
        className="border p-2"
      />

      <div>
        <input type="file" {...register('photo')} />
      </div>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        บันทึก Portfolio
      </button>
    </form>
  )
}
