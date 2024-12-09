"use client"

import React from 'react'
import { SignOutButton } from '@clerk/nextjs'
import { useToast } from "@/hooks/use-toast"

const SignOutLink = () => {
    const { toast } = useToast();
    const handleLogout = ()=>{
        toast({ description: "Logout successfully!!"});
    }
  return (
    <SignOutButton>
        <button className='w-full text-left' onClick={handleLogout}>LogOut</button>
    </SignOutButton>
  )
}

export default SignOutLink