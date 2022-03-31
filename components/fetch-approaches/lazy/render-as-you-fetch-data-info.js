import React from 'react'

const DataInfo = ({dataResource}) => {
  const data = dataResource.read()
  return <div>{data?.title || 'Empty'}</div>
}

export default DataInfo
