import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link';

const EmptyList = ({ heading = 'No item', message = 'Please try again', btnText = 'back home' }: { heading?: string; message?: string; btnText?: string; }) => {
    return (
        <div>
            <h2 className='text-xl font-bold'>{heading}</h2>
            <p className='text-lg mb-4'>{message}</p>
            <Button className='capitalize' asChild>
                <Link href='/'>{btnText}</Link>
            </Button>
        </div>
    )
}

export default EmptyList