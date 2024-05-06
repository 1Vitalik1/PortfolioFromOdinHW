import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './Components/Header';
import MainPage from './Page/MainPage';
import NotFoundPage from './Page/NotFoundPage';
import PortfolioPage from './Page/PortfolioPage';
import ContactsPage from './Page/ContactsPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <main className='Content'>
          <Routes>
            <Route path='' element={<MainPage/>}></Route>
            <Route path='/main' element={<MainPage/>}></Route>
            <Route path='/main' element={<MainPage/>}></Route>
            <Route path='/portfolio' element={<PortfolioPage/>}></Route>
            <Route path='/contacts' element={<ContactsPage/>}></Route>
            <Route path='*' element={<NotFoundPage/>}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
