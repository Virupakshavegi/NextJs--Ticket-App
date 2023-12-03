"use client"
import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useRouter } from 'next/navigation'

 const DeleteBook = ({id}) => {
  const router=useRouter()
  const deleteTicket=async()=>{
    const res=await fetch(`/api/Tickets/${id}`,{
      method:"DELETE"
    })
    if(res.ok){
      router.refresh()
    }
  }
  return (
    <div>
      <FontAwesomeIcon icon={faX} className='text-red-400 hover:cursor-pointer hover:text-red-200'
      onClick={deleteTicket}/>
    </div>
    
  )
}
export default DeleteBook
