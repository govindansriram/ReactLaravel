import React from 'react'
import Navigation from './components/navbar/navbar'
import './App.css'
import { Routes, Route } from 'react-router'
import Home from './components/home/home';
import Recipe from './components/recipe/recipe';
import Place from './components/place/place';
import Protected from './components/protected/protected';
import Login from './components/login/login';

function App() {
  return (
    <>
      <Navigation />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route element={<Protected/>}>
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/restaurant" element={<Place />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
