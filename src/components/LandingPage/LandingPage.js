import React from 'react'
import LandingModal from '../LandingModal/LandingModal.js'

import { updateSearchError, showModal } from '../../packages/redux/search-slice';
import store from '../../packages/redux/store';
import { useSelector } from 'react-redux';
import apiCalls from '../../apiCalls'
import './LandingPage.css'

const LandingPage = ({ createCards }) => {
  const cards = useSelector(state => state.cards.cards)
  const searchError = useSelector(state => state.search.error)
  const show = useSelector(state => state.search.show)

  const submitSearch = async e => {
    e.preventDefault()
    if (e.target.value) {
      const searchResults = await apiCalls.searchItems(e.target.value)
      reviewSearchResults(searchResults.data)
    }
  }

  const reviewSearchResults = results => {
    if (results) {
      store.dispatch(createCards(results))
      store.dispatch(updateSearchError(''))
    } else {
      store.dispatch(updateSearchError(`We couldn't find that item`))
      store.dispatch(createCards([]))
    }
  }



  return (
    <main className='landing-page'>
      <section className='landing-form-container'>
        <h2>What did your pet eat?</h2>
        <form
          className='landing-form'
        >
          <input
            type='text'
            placeholder='Enter Search'
            className='landing-form-input'
            onChange={submitSearch}
          />
        </form>
        <>{searchError && searchError}</>
      </section>
      <section className='item-cards-container'>
        {cards && cards}
      </section>
      <LandingModal show={show} />
    </main>
  )
}

export default LandingPage
