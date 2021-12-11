import React, { useState } from 'react'
import './FindVet.css'
import csc from '../../packages/csc.js'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { updateState, updateCity } from '../../packages/redux/find-vet-slice';
import store from '../../packages/redux/store';
import { useSelector } from 'react-redux';
import apiCalls from '../../apiCalls'


const FindVet = () => {

  const selectedState = useSelector(state => state.findVet.state);
  const selectedCity = useSelector(state => state.findVet.city)

  const handleOnSelectState = item => {
    store.dispatch(updateState(csc.getState(item)))
  }

  const handleOnSelectCity = item => {
    store.dispatch(updateCity(csc.getCity(item, selectedState)))
  }

  const handleSubmit = async e => {
    e.preventDefault();
    const location = `${selectedCity}, ${selectedState}`
    const vets = await apiCalls.findVet(location)
    console.log('vet', vets);
  }

  return (
    <main className='find-vet-page'>
      <form className='find-vet-form'
        onSubmit={handleSubmit}>
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
                items={csc.getCities(selectedState)}
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
