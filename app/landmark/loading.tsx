import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const loading = () => {
    return (
        <>
            <Skeleton className='h-2 w-1/4 rounded-md mb-2' />
            <Skeleton className='h-6 w-2/4 rounded-md mb-2' />
            <Skeleton className='h-[300px] md:h-[500px] w-full rounded-md' />
            <Skeleton className='h-4 w-full rounded-md mt-4' />
            <Skeleton className='h-4 w-3/4 rounded-md mt-4' />
            <Skeleton className='h-4 w-2/4 rounded-md mt-4' />
        </>
    )
}

export default loading