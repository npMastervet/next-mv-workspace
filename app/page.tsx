import LoadingCard from '@/components/card/LoadingCard'
import LandmarkContainer from '@/components/home/LandmarkContainer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <section>
      <Suspense fallback={<LoadingCard />}>
      <LandmarkContainer />
      </Suspense>        
    </section>
  )
}

export default page