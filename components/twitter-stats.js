import {ArrowSmDownIcon, ArrowSmUpIcon} from '@heroicons/react/solid'
import {useEffect, useState} from 'react'
// import {createResource} from '../utils'
import TwitterIcon from './icons/twitter'
import Spinner from './spinner'

// let twitterResource = createResource(
//   fetch('http://localhost:3000/api/twitter').then(res => res.json()),
// )

export default function TwitterStats() {
  const [data, setDate] = useState()
  useEffect(() => {
    fetch('/api/twitter')
      .then(response => response.json())
      .then(res => setDate(res))
  }, [])

  // const data = twitterResource.read()

  return (
    <div
      className="flex items-center px-10 py-6 m-4 overflow-hidden bg-white rounded-lg shadow"
      style={{minWidth: 260}}
    >
      {data ? (
        <>
          <TwitterIcon className="w-10 h-10 shrink-0 text-[#1DA1F2]" />
          <div className="pl-5">
            <p className="text-sm font-medium text-gray-500 truncate">
              Followers
            </p>
            <div className="flex items-baseline">
              <p className="text-2xl font-semibold text-gray-900">
                {data.stat}
              </p>
              <p
                className={`ml-2 flex items-baseline text-sm font-semibold ${
                  data.changeType === 'increase'
                    ? 'text-green-600'
                    : 'text-red-600'
                }`}
              >
                {data.changeType === 'increase' ? (
                  <ArrowSmUpIcon className="self-center w-5 h-5 text-green-500 shrink-0" />
                ) : (
                  <ArrowSmDownIcon className="self-center w-5 h-5 text-red-500 shrink-0" />
                )}
                {data.change}
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="flex justify-center w-full">
          <Spinner />
        </div>
      )}
    </div>
  )
}
