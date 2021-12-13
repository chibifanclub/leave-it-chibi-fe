import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../Header/Header'
import LandingPage from '../LandingPage/LandingPage'
import FindVet from '../FindVet/FindVet'
import SuggestionPage from '../SuggestionPage/SuggestionPage'
import apiCalls from '../../apiCalls'
import { saveCards } from '../../packages/redux/cards-slice'
import store from '../../packages/redux/store';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import './App.css';

class App extends React.Component {

  componentDidMount = async () => {
    const topFiveItems = await apiCalls.getTopFiveItems()
    this.createCards(topFiveItems.data)
  }

  createCards = items => {
    const cards = items.map(item => {
      return (
        <Card className='item-card' style={{'min-width': '300px', 'min-height': '350px'}}>
          <Card.Img src={item.attributes.image} style={{'max-width': '100%', 'max-height': '50%'}}/>
          <Card.Body className='card-body'>
            <Card.Title>{item.attributes.name}</Card.Title>
            <Card.Text className='card-text'>{item.attributes.description}</Card.Text>
          </Card.Body>
        </Card>
      )
    })
    store.dispatch(saveCards(cards))
  }

  render() {
    return (
      <div className="App">
        <Header />
        <section className='emergency-instructions'>
          <h4>EMERGENCY INSTRUCTIONS</h4>
          <p>(888) 426-4435 to speak with the ASPCA Animal Poison Control Center (APCC), 24 hours a day, 365 days a year. A consultation fee may apply.</p>
        </section>
        <Routes>
          <Route
            path='/'
            element={<LandingPage createCards={this.createCards}/>}
          />
          <Route
            path='/find-vet'
            element={<FindVet />}
          />
          <Route
            path='/suggestion'
            element={<SuggestionPage />}
          />
        </Routes>
      </div>
    )
  }
}

export default App;
