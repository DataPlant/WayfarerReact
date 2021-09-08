import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Routes from './config/Routes';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from 'styled-components'
import MainPage from './pages/MainPage';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
