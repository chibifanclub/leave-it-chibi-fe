import React from 'react'
import { updateQuery } from '../../packages/redux/search-slice';
import store from '../../packages/redux/store';
import { useSelector } from 'react-redux';
import apiCalls from '../../apiCalls'
import './SuggestionPage.css'

const SuggestionPage = () => {
  return (
    <main className='suggestion-page'>
      <form className='suggestion-form'>
        <h2>Make a suggestion</h2>
        <input className="suggestion-title"
          type='text'
          placeholder='Suggestion title'
        />
        <textarea className="suggestion-description"
          type='text'
          placeholder='Description of your suggestion'
          maxLength='150'
        />
        <button>Submit Suggestion</button>
      </form>
    </main>
  )
}

export default SuggestionPage
