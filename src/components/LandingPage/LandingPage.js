import React from 'react'
import Card from '../Card/Card'
import './LandingPage.css'

const LandingPage = () => {
  const cards = [
    <Card />,
    <Card />,
    <Card />,
    <Card />,
    <Card />,
    <Card />,
    <Card />,
  ]

  return (
    <main className='landing-page'>
      <section className='emergency-instructions'>
        <h2>EMERGENCY INSTRUCTIONS</h2>
      </section>
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
      <section className='item-cards-container'>
        { cards }
      </section>
    </main>
  )
}

export default LandingPage
