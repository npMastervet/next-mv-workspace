'use client'
import React from 'react'
import { useActionState } from 'react'
import { useToast } from '@/hooks/use-toast'
import { useEffect } from 'react'
import { actionFunction } from '@/utils/types'

const initialState = {
    message: ''
}

const FormContainer = ({ action, children }: {action:actionFunction, children: React.ReactNode }) => {
    const { toast } = useToast()
    const [state, formAction] = useActionState(action, initialState)
    console.log('state :', state)
    useEffect(() => {
        if (state.message) {
            toast({ description: state.message })
        }
    }, [state])
    return (
        <div>
            <form action={formAction}>
                {children}
            </form>
        </div>
    )
}

export default FormContainer