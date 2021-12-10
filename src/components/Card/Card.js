import React from 'react'
import './Card.css'

const Card = ({ item }) => {

  const capitalize = string => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  return (
    <article className='item-card'>
      <img src={item.attributes.image} className='card-img'/>
      <h3 className='card-heading'>{capitalize(item.attributes.name)}</h3>
    </article>
  )
}

export default Card
