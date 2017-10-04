import React from 'react'
import { Input } from 'antd'

const Search = (props) => {
  return (
    <Input.Search
    placeholder="input search text"
    style={{ width: 200, float: 'right' }}
    onSearch={value => props.onSearch(value)}
  />
  )
}

export default Search