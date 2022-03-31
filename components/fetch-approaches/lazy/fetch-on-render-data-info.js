import React from 'react'
import {useUpdateEffect} from '../../../utils'
import Spinner from '../../spinner'

const DataInfo = ({id}) => {
  const [data, setData] = React.useState(null)
  const [isLoading, setLoading] = React.useState(false)

  useUpdateEffect(() => {
    setLoading(true)
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => res.json())
      .then(res => {
        setData(res)
        setLoading(false)
      })
  }, [id])

  return <div>{data?.title && !isLoading ? data.title : <Spinner />}</div>
}

export default DataInfo
