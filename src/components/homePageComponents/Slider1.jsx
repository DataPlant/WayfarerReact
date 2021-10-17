import React from "react";
import Slider from "react-slick";
import styled from 'styled-components'
import slide1 from'../../img/slide1.jpeg'
import slide2 from'../../img/slide2.jpeg'
import slide3 from'../../img/slide3.jpeg'
import slide4 from'../../img/slide4.jpeg'
import slide6 from'../../img/slide6.jpeg'




export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const Div = styled.div`
    width: 100vh;
    text-align:center;
    position:relative;
  `
  const H1 = styled.h1`
    width:100%;    
    height:100%;
    position: absolute;
    top: 0;
    left: 0px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    display: flex;
    font-size:60px;
    color:white;
    z-index:3;
    opacity:.8;
  `

  const P = styled.p`
    width:100%;    
    height:100%;
    position: absolute;
    top: 60px;
    left: 0px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    display: flex;
    font-size:18px;
    font-weight:bold;
    color:white;
    z-index:4;
    opacity:.8;
  `

  const Img = styled.img`
    text-align:center;
    position:relative;
    width:100%;
    height:60vh;
    mask-image: linear-gradient(to bottom, rgba(0,0,0,0) 80%,rgba(0, 0, 0, 0.434) 100%);
  -webkit-mask-image: linear-gradient(to bottom, rgba(107, 52, 52, 0.8) 0%,rgba(1,1,1,.4) 80%);

  `

  return (
    <Slider {...settings}>
      <Div>
        <H1>Welcome to Wayfarer</H1>
<<<<<<< HEAD
        <P>Your travel log! Navigate to the cities page and add some posts and cities of your own. Enjoy!</P>
=======
        <P>Time to wander or whatever.</P>
>>>>>>> 95f98c535da5b039daebdf27915f485e94132eae
        <Img src= {slide6} alt="" srcset="" />
      </Div>
      <Div>
        <H1>Where you at?</H1>
        <P>Tell us about your adventure.</P>
        <Img src= {slide4} alt="" srcset="" />
      </Div>
      <Div>
        <H1>Welcome to Wayfarer</H1>
        <P>Time to wander or whatever.</P>
        <Img src= {slide3} alt="" srcset="" />
      </Div>
      <Div>
        <H1>Welcome to Wayfarer</H1>
        <P>Time to wander or whatever.</P>
        <Img src= {slide2} alt="" srcset="" />
      </Div>
      <Div>
        <H1>Some more text.</H1>
        <P>Blah blah blahhhh.</P>
        <Img src= {slide1} alt="" srcset="" />
      </Div>
    </Slider>
  );
}

