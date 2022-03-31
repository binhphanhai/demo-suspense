// import {Suspense} from 'react'
// import Spinner from '../components/spinner'
import ChipotleStats from '../components/chipotle-stats'
import TwitterStats from '../components/twitter-stats'
import YouTubeStats from '../components/youtube-stats'

export default function Home() {
  return (
    <div className="p-8">
      <h3 className="text-lg font-medium leading-6 text-gray-900">Dashboard</h3>

      <div className="flex flex-wrap">
        <TwitterStats />
        <YouTubeStats />
        <ChipotleStats />
      </div>
    </div>
  )
}

// function Loading() {
//   return (
//     <div className="flex justify-center mt-44">
//       <Spinner />
//     </div>
//   )
// }
