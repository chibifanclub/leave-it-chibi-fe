import React from 'react'
import Card from '../Card/Card'
import { updateQuery, updateSearchError } from '../../packages/redux/search-slice';
import { createCards } from '../../packages/redux/cards-slice'
import store from '../../packages/redux/store';
import { useSelector } from 'react-redux';
import apiCalls from '../../apiCalls'
import './LandingPage.css'

const LandingPage = () => {
  const query = useSelector(state => state.search.query)
  const cards = useSelector(state => state.cards.cards)
  const searchError = useSelector(state => state.search.error)

  const submitSearch = async e => {
    e.preventDefault()
    const searchResults = await apiCalls.searchItems(query)
    reviewSearchResults(searchResults.data)
  }

  const reviewSearchResults = results => {
    if(results) {
      store.dispatch(createCards(results))
      store.dispatch(updateSearchError(''))
    } else {
      store.dispatch(updateSearchError('That item does not exist in our database'))
      store.dispatch(createCards([]))
    }
  }

  const handleChange = e => {
    store.dispatch(updateQuery(e.target.value))
  }

  return (
    <main className='landing-page'>
      <section className='emergency-instructions'>
        <h2>EMERGENCY INSTRUCTIONS</h2>
        <p>(888) 426-4435 </p>
        <p>to speak with the ASPCA Animal Poison Control Center (APCC), 24 hours a day, 365 days a year. A consultation fee may apply.</p>
      </section>
      <section className='landing-form-container'>
        <h2>What did your pet eat?</h2>
        <form
          className='landing-form'
          onSubmit={submitSearch}
        >
          <input
            type='text'
            placeholder='Enter Search'
            className='landing-form-input'
            onChange={handleChange}
          />
          <button className='landing-form-btn'>Search</button>
        </form>
        <>{searchError && searchError}</>
      </section>
      <section className='item-cards-container'>
        { cards && cards }
      </section>
    </main>
  )
}

export default LandingPage
