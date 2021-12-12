import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../Header/Header'
import LandingPage from '../LandingPage/LandingPage'
import FindVet from '../FindVet/FindVet'
import SuggestionPage from '../SuggestionPage/SuggestionPage'
import './App.css';
import Modal from '../Modal/Modal'

function App() {

  return (
    <div className="App">
      <Header />
      <section className='emergency-instructions'>
        <h2>EMERGENCY INSTRUCTIONS</h2>
        <p>(888) 426-4435 </p>
        <p>to speak with the ASPCA Animal Poison Control Center (APCC), 24 hours a day, 365 days a year. A consultation fee may apply.</p>
      </section>
      <Routes>
        <Route
          path='/home'
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
      {/* <Modal /> */}
      <footer>
      </footer>
    </div>
  );
}

export default App;
