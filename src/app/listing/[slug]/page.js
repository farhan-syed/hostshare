'use client'
import Skeleton from '@/app/components/Skeleton'
import Navigation from '@/app/components/Navigation'
import ListingMain from '@/app/components/Listing'
import axios from 'axios'
import useSWR from 'swr'
import { useParams } from 'next/navigation'

//header,
// title, images, home title with host image, description section, amenities, location,
// reservation widget that is sticky, mobile, amonut of guests, bedrooms, beds, baths
const fetcher = (url) => axios.get(url).then((res) => res.data.data)
function useFetcher() {
  const { data, error, isLoading } = useSWR(
    'https://file.notion.so/f/s/24643894-e5c3-4c40-974a-52594f581e03/listings.json?id=f795dab6-14d4-48a9-9567-c72151d311a2&table=block&spaceId=f2ea7328-64a4-4f18-bacc-df6c9ac3d888&expirationTimestamp=1685678963735&signature=2za4-iEpAGkDUi9K4_43_58yoPOaOl99fcqmySDCYDg&downloadName=listings.json',
    fetcher
  )

  return {
    list: data,
    isLoading,
    isError: error,
  }
}

export default function Listing() {
  const { list, isLoading } = useFetcher()
  const params = useParams()
  const id = params.slug
  if (isLoading)
    return (
      <>
        <div className='container mx-auto'>
          <div>
            <Navigation />
          </div>
          {/*  */}
        </div>
      </>
    )
  return (
    <div className='container mx-auto'>
      <div>
        <Navigation />
      </div>
      <div className='relative flex m-10'>
        <div className='grid grid-cols-1 transition ease-in-out delay-150 gap-4 flex-grow'>
          {<ListingMain data={list.filter((obj) => obj.info.id === id)} />}
        </div>
      </div>
    </div>
  )
}
