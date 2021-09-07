import React from "react";
import Slider from "react-slick";
import Slider1 from '../components/homePageComponents/Slider1.jsx';
import Section from "../components/homePageComponents/Section.jsx";
import styled from "styled-components";

const H1 = styled.h1 `
  margin-top:20px;
  text-align:center;
  color:white;
`

const Div = styled.div `
  background-size:cover;
  background-color:#121212;
`

function HomePage() {
  return (
    
    <Div>
      <Slider1>
      </Slider1>
      <Div>
        <br />
        <H1>
          Wayfarer is a...
        </H1>
        <Section></Section> 
        <br />
        <br />

      </Div>
    </Div>
  );
}

export default HomePage;
