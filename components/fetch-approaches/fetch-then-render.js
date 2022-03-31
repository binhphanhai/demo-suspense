import React from 'react'
import Spinner from '../spinner'

const DataInfo = React.lazy(() => import('./lazy/fetch-then-render-data-info'))

const DataWrapper = () => {
  const [id, setId] = React.useState(0)
  const [data, setData] = React.useState(null)
  const [isLoading, setLoading] = React.useState(false)

  React.useEffect(() => {
    if (id === 0) return
    setLoading(true)
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => res.json())
      .then(res => {
        setData(res)
        setLoading(false)
      })
  }, [id])

  return (
    <div className="mt-8">
      <div>Fetch then render</div>
      <div className="inline-block relative w-64 mt-2">
        <select
          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          value={id}
          onChange={e => setId(+e.target.value)}
        >
          <option value={0}>Nothing</option>
          <option value={1}>Todo 1</option>
          <option value={2}>Todo 2</option>
          <option value={3}>Todo 3</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
      {data && (
        <div className="mt-8">
          <React.Suspense fallback={<Spinner />}>
            <DataInfo data={data} isLoading={isLoading} />
          </React.Suspense>
        </div>
      )}
    </div>
  )
}

export default DataWrapper
