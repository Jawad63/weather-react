import React from 'react';
import WeatherCard from './components/WeatherCard';
import './App.css';
import { Conatiner, Container } from 'react-bootstrap';
import CitySelector from './components/CitySelector';

const App = () => {
  return (
    <Container className="App">
      <CitySelector />
    </Container>
  );
};

export default App;