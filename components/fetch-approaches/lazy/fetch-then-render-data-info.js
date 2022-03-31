import React from 'react'
import Spinner from '../../spinner'

const DataInfo = ({data, isLoading}) => {
  return <div>{data?.title && !isLoading ? data.title : <Spinner />}</div>
}

export default DataInfo
