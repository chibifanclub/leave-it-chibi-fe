import React, { useState } from 'react'
import './FindVet.css'
import { Country, State, City } from 'country-state-city'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

const FindVet = () => {


  const getStates = () => {
    return (
      State.getStatesOfCountry('US').map((state, index) => {
        return({
          id: index,
          name: state.name
        })
      })
    )
  }
  const getCities = city => {
    return (
      City.getCitiesOfState('US', city).map((city, index) => {
        return ({
          id: index,
          name: city.name
        })
      })
    )
  }

  const [selectedState, updateSelectedState] = useState('')
  const [cities, updateCities] = useState('')

  const handleOnSelect = item => {
    updateSelectedState(State.getStatesOfCountry('US')[item.id])
  }

  return (
    <main className='find-vet-page'>
      <form className='find-vet-form'>
        <h2>Find a Vet</h2>
        <label>State</label>
        <div className='state-input'>
          <ReactSearchAutocomplete
            items={getStates()}
            maxResults='2'
            onSelect={handleOnSelect}
          />
        </div>
        <>
          {
            selectedState &&
            <div className='state-input'>
              <label>City</label>
              <ReactSearchAutocomplete
                items={getCities(selectedState.isoCode)}
                maxResults='2'
              />
            </div>
          }
        </>
      </form>
    </main>
  )
}

export default FindVet
