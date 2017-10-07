import React from 'react'
import { Card, Rate } from 'antd'

const Search = (props) => {
  const {item} = props
  return (
    <Card>
      <Rate disabled defaultValue={item.rating.value}/>
      <p>{item.content}</p>
    </Card>
  )
}

export default Search