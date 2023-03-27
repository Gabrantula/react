
import { Routes, Route, useNavigate } from 'react-router-dom'

import Gaby from './components/Gaby';
import Catalog from './components/Catalog/Catalog';
import Create from './components/Create';
import Details from './components/Details';
import Edit from './components/Edit';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import MyPage from './components/MyPage';
import Navigation from './components/Navigation';
import Register from './components/Register';

import { useState, useEffect } from "react";
import * as CardService from './services/CardService'

function App() {
  const [cards, setCards] = useState([])
  const navigate =useNavigate()

  useEffect(() => {
     CardService.getAll()
     .then(result => {
       //console.log(result);
       setCards(result)
     })
  },[])

  const onCreateCardSubmit = async(data) => {
   
    const newCard = await CardService.create(data)
    //console.log(newGame);
    setCards(state => [...state, newCard])
    navigate('/all-cards')
    
     }
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <main id="main-container">
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/all-cards' element={<Catalog cards={cards} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/create' element={<Create onCreateCardSubmit={onCreateCardSubmit} />} />
          <Route path='/Gaby-page' element={<Gaby />} />
          <Route path='/my-cards' element={<MyPage />} />
          <Route path='/details/:cardId' element={<Details />} />
          <Route path='/edit' element={<Edit />} />
        </Routes>

        <Footer />
      </main>
    </div>
  );
}

export default App;
