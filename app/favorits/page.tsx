import { fetchFavorits } from '@/actions/actions'
import EmptyList from '@/components/home/EmptyList'
import LandmarkList from '@/components/home/LandmarkList'
import React from 'react'

const FavoritsPage = async() => {
  const favorites = await fetchFavorits()
  if(favorites.length ===0){
    return <EmptyList heading='No item Favorite' />
  }
  return <LandmarkList landmarks={favorites} />  
}

export default FavoritsPage