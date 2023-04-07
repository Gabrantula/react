
import { Routes, Route } from 'react-router-dom'

import Gaby from './components/Gaby/Gaby';
import Catalog from './components/Catalog/Catalog';
import Create from './components/Create/Create';
import Details from './components/Details/Details';
import Edit from './components/Edit/Edit';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import MyPage from './components/MyPage/MyPage';
import Navigation from './components/Navigation/Navigation';
import Register from './components/Register/Register';
import Logout from './components/Logout/Logout'
import NotFound from './components/404/NotFound';

import { AuthProvider } from './contexts/AuthContext'
import { CardProvider } from './contexts/CardContext';
import { RouteGuard } from './components/common/RouteGuard';
import Comments from './components/Comments/Comments';
import CardOwner from './components/common/CardOwner'


function App() {

  return (
    <AuthProvider>
      <CardProvider>
        <div className="App">
          <header>
            <Navigation />
          </header>
          <main id="main-container">
            <Routes>
              <Route path='*' element={<NotFound />} />
              <Route path='/' element={<Home />} />
              <Route path='/all-cards' element={<Catalog />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/Gaby-page' element={<Gaby />} />
              <Route path='/my-cards' element={<MyPage />} />
              <Route path='/all-cards/:cardId' element={<Details />} />

              <Route element={<RouteGuard />} >
                <Route path='/create' element={<Create />} />
                <Route path='/all-cards/:cardId/edit' element={
                  <CardOwner>
                    <Edit />
                  </CardOwner>
                } />
                <Route path='/logout' element={<Logout />} />
                <Route path='/all-cards/:cardId/comments' element={<Comments />} />
              </Route>

            </Routes>

            <Footer />
          </main>
        </div>
      </CardProvider>
    </AuthProvider>
  );
}

export default App;
