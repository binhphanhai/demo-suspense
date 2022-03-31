import 'tailwindcss/tailwind.css'
import Link from 'next/link'
import {makeServer} from '../mirage'

let isClient = typeof window !== 'undefined'

if (isClient && process.env.NODE_ENV === 'development') {
  if (!window.server) {
    window.server = makeServer({environment: 'development'})
  }
}

export default function App({Component, pageProps}) {
  return (
    <div className="flex justify-center w-full min-h-screen px-20 pt-8 antialiased md:pt-28 bg-slate-100">
      <ul className="flex text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
        <li className="mr-8">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/fetch-approaches">
            <a>Fetch Approaches</a>
          </Link>
        </li>
      </ul>
      <div className="p-8 mb-20"></div>
      <div className="w-full max-w-4xl">
        <Component {...pageProps} />
      </div>
    </div>
  )
}
