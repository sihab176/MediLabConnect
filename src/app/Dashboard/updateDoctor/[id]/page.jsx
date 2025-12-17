import DoctorEditForm from '@/components/DoctorEditForm/page'
import React from 'react'

const page = async({params}) => {
    const p= await params
    console.log("params doctor ", p.id)
  return (
    <div>
      <DoctorEditForm appointmentId={p.id}/>
    </div>
  )
}

export default page