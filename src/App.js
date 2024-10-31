import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Create from './components/Create';
import Update from './components/Update';
import Read from './components/Read';
import Delete from './components/Delete';
import NotFound from './components/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
return (
<BrowserRouter>
  <Header />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/create' element={<Create />} />
    <Route path='/update' element={<Update />} />
    <Route path='/read/:id' element={<Read />} />
    <Route path='/delete' element={<Delete />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
</BrowserRouter>
);
}

export default App;
