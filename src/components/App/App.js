import { Route, Routes } from 'react-router-dom'
import Header from '../Header/Header'
import LandingPage from '../LandingPage/LandingPage'
import FindVet from '../FindVet/FindVet'
import SuggestionPage from '../SuggestionPage/SuggestionPage'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path='/'
          element={ <LandingPage /> }
        />
        <Route
          path='/find-vet'
          element={ <FindVet /> }
        />
        <Route
          path='/suggestion'
          element={ <SuggestionPage /> }
        />
      </Routes>
      <footer></footer>
    </div>
  );
}

export default App;
