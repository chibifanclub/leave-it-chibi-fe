import React from 'react'
import Card from '../Card/Card'
import Modal from 'react-bootstrap/Modal'

import { updateQuery, updateSearchError, showModal } from '../../packages/redux/search-slice';
import { createCards } from '../../packages/redux/cards-slice'
import store from '../../packages/redux/store';
import { useSelector } from 'react-redux';
import apiCalls from '../../apiCalls'
import './LandingPage.css'

const LandingPage = () => {
  const query = useSelector(state => state.search.query)
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

  const handleClose = () => {
    store.dispatch(showModal(false))
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
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Item test</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>Test</h3>
          <p>This is a test sentence</p>
        </Modal.Body>
      </Modal>
    </main>
  )
}

export default LandingPage
