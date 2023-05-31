export default function ListingItem(data) {
  const listing = data.data[0]
  console.log(listing)
  return (
    <main className='py-6 rounded-lg'>
      <div class='grid col-start-1 col-end-5 row-start-1'>
        <div className=''>
          <img
            src={listing.info.mainImage.url}
            alt=''
            class='w-full object-cover rounded-lg'
            loading='lazy'
          />
          {listing.info.host && (
            <div className='flex flex-row justify-between ml-2'>
              <div className='flex flex-row'>
                <div>
                  <img
                    src={listing.info.host.avatar.url}
                    alt=''
                    class='mt-4 w-10 rounded-md'
                    loading='lazy'
                  />
                </div>
                <div>
                  <p className='my-6 ml-2'>{listing.info.host.name}</p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className='mt-1'>
          <h1 class='mt-1 text-lg font-semibold text-black ml-2 mb-2'>
            {listing.info.title}
          </h1>
          <div className='flex flex-row'>
            <div>
              <h1 class='mt-1 text-3xl font-semibold text-black ml-2 mb-2'>
                {listing.info.currency.symbol}
                {listing.info.price}
              </h1>
            </div>
            <div className='mt-4 ml-1'>
              <p className='text-sm'>/ night</p>
            </div>
          </div>
        </div>
        <dl class='mt-1 text-xs font-medium flex items-center row-start-3'>
          <dt class='sr-only'>Location</dt>
          <dd class='flex items-center'>
            <svg
              width='24'
              height='24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              class='mr-1 text-slate-400 dark:text-slate-500'
              aria-hidden='true'
            >
              <path d='M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z' />
              <path d='M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z' />
            </svg>
            {listing.info.location.city +
              ', ' +
              listing.info.location.country.title}
          </dd>
        </dl>
        <dl class='mt-3 text-xs font-medium flex items-center row-start-4 ml-1'>
          <dt class='sr-only'>Guests</dt>
          <dd class='text-black flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='15'
              height='15'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='3'
              stroke-linecap='round'
              stroke-linejoin='round'
              class='feather feather-user'
            >
              <path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'></path>
              <circle cx='12' cy='7' r='4'></circle>
            </svg>

            <span className='text-sm ml-2'>
              {listing.info.maxGuestCapacity}
            </span>
          </dd>

          <dt class='sr-only'>Reviews</dt>
          <dd class='text-black flex items-center'>
            <svg
              width='2'
              height='2'
              aria-hidden='true'
              fill='currentColor'
              class='mx-3 text-black'
            >
              <circle cx='1' cy='1' r='1' />
            </svg>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='15'
              height='15'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='3'
              stroke-linecap='round'
              stroke-linejoin='round'
              class='feather feather-star'
            >
              <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'></polygon>
            </svg>
            <span className='text-sm ml-2'>
              {listing.info.ratings.guestSatisfactionOverall}{' '}
            </span>
          </dd>

          <svg
            width='2'
            height='2'
            aria-hidden='true'
            fill='currentColor'
            class='mx-3 text-black'
          >
            <circle cx='1' cy='1' r='1' />
          </svg>

          <dt class='sr-only'>View Count</dt>
          <dd class='text-black flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='3'
              stroke-linecap='round'
              stroke-linejoin='round'
              class='feather feather-eye'
            >
              <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'></path>
              <circle cx='12' cy='12' r='3'></circle>
            </svg>
            <span className='text-sm ml-2'>
              {listing.info.visibleReviewCount}{' '}
            </span>
          </dd>
        </dl>
      </div>
    </main>
  )
}
