import LoadingCard from '@/components/card/LoadingCard'
import LandmarkContainer from '@/components/home/LandmarkContainer'
import { categories } from '@/utils/categories';
import React, { Suspense } from 'react'

const page = async ({ searchParams }: 
  { searchParams: { search?: string, category?:string } }) => {

  const { search,category } = await searchParams;
  console.log(search)
  return (
    <section>
      <Suspense fallback={<LoadingCard />}>
        <LandmarkContainer search={search} category={category} />
      </Suspense>
    </section>
  )
}

export default page