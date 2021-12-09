import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../Header/Header'
import LandingPage from '../LandingPage/LandingPage'
import FindVet from '../FindVet/FindVet'
import SuggestionPage from '../SuggestionPage/SuggestionPage'
import './App.css';
import store from '../../redux/store';
import { updateState } from '../../redux/find-vet-slice';
import { useSelector } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Header />
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
      <footer>
      </footer>
    </div>
  );
}

// console.log('find vet slice', findVetSlice.reducer);
const test = async () => {
  const { state } = useSelector(state => state.findVet);
  console.log('state', state);
}

test();

export default App;
