import React from 'react'
import './LandingPage.css'

const LandingPage = () => {
  return (
    <main className='landing-page'>
      <section className='landing-form-container'>
        <h2>What did your pet eat?</h2>
        <form className='landing-form'>
          <input
            type='text'
            placeholder='Enter Search'
            className='landing-form-input'
          />
          <button className='landing-form-btn'>Search</button>
        </form>
      </section>
    </main>
  )
}

export default LandingPage
