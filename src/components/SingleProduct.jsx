import React from 'react'
import "./style.css"

const SingleProduct = ({prod}) => {
  return (
    <div>{prod.productname}</div>
  )
}

export default SingleProduct