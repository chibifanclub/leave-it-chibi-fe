import React from 'react'
import './Card.css'
import { showModal } from '../../packages/redux/search-slice';
import store from '../../packages/redux/store';

const Card = ({ item }) => {

  const capitalize = string => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  return (
    <article className='item-card' onClick={() => store.dispatch(showModal(true))}>
      <img src={item.attributes.image} className='card-img'/>
      <div className='card-attributes'>
        <h3 className='card-heading'>{capitalize(item.attributes.name)}</h3>
        <p className='item-attributes'>{ item.attributes.description }</p>
      </div>
    </article>
  )
}

export default Card
