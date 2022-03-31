import {useState} from 'react'
import DataWrapper1 from '../components/fetch-approaches/fetch-on-render'
import DataWrapper2 from '../components/fetch-approaches/fetch-then-render'
import DataWrapper3 from '../components/fetch-approaches/render-as-you-fetch'

const activeClassName =
  'inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500'
const inactiveClassName =
  'inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300'

const tabs = [
  {
    id: 1,
    title: 'Fetch-on-render',
  },
  {
    id: 2,
    title: 'Fetch-then-render',
  },
  {
    id: 3,
    title: 'Render-as-you-fetch',
  },
]

export default function FetchApproaches() {
  const [activeTab, setActiveTab] = useState(1)
  return (
    <div className="p-8">
      <h3 className="text-lg font-medium leading-6 text-gray-900">
        Fetch Approaches
      </h3>
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
        {tabs.map(item => (
          <li
            key={item.id}
            className={
              activeTab === item.id ? activeClassName : inactiveClassName
            }
            onClick={() => setActiveTab(item.id)}
          >
            <a href="#" aria-current="page" className="">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
      {activeTab === 1 ? (
        <DataWrapper1 />
      ) : activeTab === 2 ? (
        <DataWrapper2 />
      ) : activeTab === 3 ? (
        <DataWrapper3 />
      ) : (
        <>hihi</>
      )}
    </div>
  )
}
