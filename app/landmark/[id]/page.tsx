import { fetchLandmarkDetail } from '@/actions/actions'
import FavoriteToggleButton from '@/components/card/FavoriteToggleButton'
import Breadcrums from '@/components/landmark/Breadcrums'
import Description from '@/components/landmark/Description'
import ImageContainer from '@/components/landmark/ImageContainer'
import ShareButton from '@/components/landmark/ShareButton'
import MapLandmark from '@/components/map/MapLandMark'
import { redirect } from 'next/navigation'
import React from 'react'

const LandmarkDetail = async ({ params }: { params: { id: string } }) => {
    const { id } = await params
    const landmark = await fetchLandmarkDetail({ id })
    if (!landmark) redirect('/')
    return (
        <section>
            <Breadcrums name={landmark.name} />
            <header className='flex justify-between mt-4 item-center'>
                <h1 className='text-4xl font-bold'>{landmark.name}</h1>
                <div className='flex item-center gap-x-4'>
                    <ShareButton landmarkId={landmark.id} name={landmark.name} />
                    <FavoriteToggleButton landmarkId={landmark.id} />
                </div>
            </header>
            <ImageContainer mainImage={landmark.image} name={landmark.name}/>
            <section>
                <div>
                    <Description description={landmark.description} />
                    <MapLandmark location={{lat:landmark.lat, lng:landmark.lng}} />
                </div>
            </section>
        </section>
    )
}

export default LandmarkDetail