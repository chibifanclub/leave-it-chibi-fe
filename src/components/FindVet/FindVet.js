import React, { useState } from 'react'
import './FindVet.css'
import csc from '../../packages/csc.js'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { updateState, updateCity, createCards } from '../../packages/redux/find-vet-slice';
import store from '../../packages/redux/store';
import { useSelector } from 'react-redux';
import apiCalls from '../../apiCalls'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'



const FindVet = () => {

  const selectedState = useSelector(state => state.findVet.state);
  const selectedCity = useSelector(state => state.findVet.city)
  const cards = useSelector(state => state.findVet.cards).slice(0, 5).map(vet =>{
    return (
      <Card as={Col} className='vet-card'>
        <Card.Img variant='top' src={vet.attributes.image} className='vet-card-img'/>
        <Card.Body>
          <Card.Title className='mb-3'>{vet.attributes.name}</Card.Title>
          <Card.Subtitle className='mb-2'>{vet.attributes.phone}</Card.Subtitle>
          <Card.Text>{vet.attributes.address}</Card.Text>
        </Card.Body>
      </Card>
    )
  })

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
    store.dispatch(createCards(vets.data))
    console.log(vets.data)
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
      <Container className='vet-cards-container'>
        <Row>
          {cards}
        </Row>
      </Container>
    </main>
  )
}

export default FindVet
