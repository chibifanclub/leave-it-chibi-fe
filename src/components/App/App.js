import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../Header/Header'
import LandingPage from '../LandingPage/LandingPage'
import FindVet from '../FindVet/FindVet'
import SuggestionPage from '../SuggestionPage/SuggestionPage'
import apiCalls from '../../apiCalls'
import { createCards } from '../../packages/redux/cards-slice'
import store from '../../packages/redux/store';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './App.css';

class App extends React.Component {

  componentDidMount = async () => {
    const topFiveItems = await apiCalls.getTopFiveItems()
    console.log(topFiveItems)
    store.dispatch(createCards(topFiveItems.data))
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
            element={<LandingPage />}
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
