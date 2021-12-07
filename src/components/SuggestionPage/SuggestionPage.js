import React from 'react'
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
          placeholder='Description of the suggestion'
        />
        <button>Submit Suggestion</button>
      </form>
    </main>
  )
}

export default SuggestionPage
