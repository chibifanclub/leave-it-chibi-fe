import React, { useState } from 'react'
import './FindVet.css'
import csc from '../../packages/csc.js'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

const FindVet = () => {

  const [selectedState, updateSelectedState] = useState('')
  const [selectedCity, updateSelectedCity] = useState('')

  const handleOnSelectState = item => {
    updateSelectedState(csc.getState(item))
  }

  const handleOnSelectCity = item => {
    updateSelectedCity(csc.getCity(item, selectedState.isoCode))
  }

  return (
    <main className='find-vet-page'>
      <form className='find-vet-form'>
        <h2>Find a Vet</h2>
        <div className='find-vet-input'>
        <label className='find-vet-label'>State</label>
          <ReactSearchAutocomplete
            items={csc.getStates()}
            maxResults='4'
            onSelect={handleOnSelectState}
          />
        </div>
        <>
          {
            selectedState &&
            <div className='find-vet-input'>
              <label className='find-vet-label'>City</label>
              <ReactSearchAutocomplete
                items={csc.getCities(selectedState.isoCode)}
                maxResults='4'
                onSelect={handleOnSelectCity}
              />
            </div>
          }
        </>
        <>
          {
            selectedCity &&
            <button className='find-vet-btn'>Search</button>
          }
        </>
      </form>
    </main>
  )
}

export default FindVet
