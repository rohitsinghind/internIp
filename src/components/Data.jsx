import React from 'react'

export default function Data(props) {
    console.log(props.data)
  return (
    <div>{props.data?.country}</div>
  )
}
