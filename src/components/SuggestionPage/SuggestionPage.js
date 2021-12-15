import React from 'react'
import { updateName, updateDescription } from '../../packages/redux/suggestion-slice';
import store from '../../packages/redux/store';
import { useSelector } from 'react-redux';
import apiCalls from '../../apiCalls'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './SuggestionPage.css'

const SuggestionPage = () => {
  const name = useSelector(state => state.suggestion.name)
  const description = useSelector(state => state.suggestion.description)

  const handleChange = e => {
    if (e.target.name === 'name') {
      store.dispatch(updateName(e.target.value))
    } else {
      store.dispatch(updateDescription(e.target.value))
    }
  }

  const onSubmit = async e => {
    e.preventDefault()
    const apiSuggestion = await apiCalls.submitSuggestion({
      'name': name,
      'description': description,
    })
    console.log('api suggestion', apiSuggestion)
  }

  return (
    <main className='suggestion-page'>
      <Form className='suggestion-form' onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="itemName.ControlInput1">
          <Form.Label>Item Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="e.g. Onion" onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="itemDescription.ControlTextarea1">
          <Form.Label>Item Description</Form.Label>
          <Form.Control name="description" as="textarea" rows={3} onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <img
        src='https://s36700.pcdn.co/wp-content/uploads/2017/10/A-hungry-dog-looking-up-near-his-food-and-water-bowl-600x400.jpg.optimal.jpg'
        className='suggestion-img'
      />
    </main>
  )
}

export default SuggestionPage
