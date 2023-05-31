'use client'
import Navigation from './components/Navigation'
import ListingItem from './components/ListingItem'
import Skeleton from './components/Skeleton'
import axios from 'axios'
import useSWR from 'swr'

const fetcher = (url) => axios.get(url).then((res) => res.data.data)
function useFetcher() {
  const { data, error, isLoading } = useSWR(
    'https://file.notion.so/f/s/24643894-e5c3-4c40-974a-52594f581e03/listings.json?id=f795dab6-14d4-48a9-9567-c72151d311a2&table=block&spaceId=f2ea7328-64a4-4f18-bacc-df6c9ac3d888&expirationTimestamp=1685581946040&signature=SyZHeIqKtq-JIStqw-Zi6yw077nPm7bN_qEtYgUCR18&downloadName=listings.json',
    fetcher
  )
  return {
    list: data,
    isLoading,
    isError: error,
  }
}

export default function Home() {
  const { list, isLoading } = useFetcher()
  if (isLoading)
    return (
      <div className='w-screen'>
        <div>
          <Navigation />
        </div>
        <div className='relative flex m-10'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 flex-grow'>
            {[...Array(16)].map((x) => (
              <Skeleton key={x} />
            ))}
          </div>
        </div>
      </div>
    )
  return (
    <div className='w-screen'>
      <div>
        <Navigation />
      </div>
      <div className='relative flex m-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 flex-grow'>
          {list.length &&
            list.map((x) => <ListingItem listItem={x} key={x.id} />)}
        </div>
      </div>
    </div>
  )
}
