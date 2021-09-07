import React from "react";
import Slider from "react-slick";
import styled from 'styled-components'


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
        <P>Time to wander or whatever.</P>  
        <Img src="https://images.unsplash.com/photo-1546884680-a1de22e94d50?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" alt="" srcset="" />
      </Div>
        <Div>
        <H1>Where you at?</H1>      
        <P>Tell us about your adventure.</P>  
        <Img src="https://images.unsplash.com/photo-1590757879641-d23ccb04d98d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" alt="" srcset="" />
      </Div>
      <Div>
        <H1>Welcome to Wayfarer</H1>      
        <P>Time to wander or whatever.</P>  
        <Img src="https://images.unsplash.com/photo-1543964496-d83d90140d97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1" alt="" srcset="" />
      </Div>
      <Div>
        <H1>Welcome to Wayfarer</H1>      
        <P>Time to wander or whatever.</P>  
        <Img src="https://images.unsplash.com/photo-1537779948435-62e7e105ce9a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" alt="" srcset="" />
      </Div>
      <Div>
        <H1>Some more text.</H1>      
        <P>Blah blah blahhhh.</P>  
        <Img src="https://images.unsplash.com/photo-1628894580191-bbc827d5c4f3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" alt="here's a scary bridge. boo!" srcset="" />
      </Div>
      <Div>
        <H1>Welcome to Wayfarer</H1>      
        <P>Time to wander or whatever.</P>  
        <Img src="https://images.unsplash.com/photo-1544946632-b73cacef16ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" alt="" srcset="" />
      </Div>
      <Div>
        <H1>Welcome to Wayfarer</H1>      
        <P>Time to wander or whatever.</P>  
        <Img src="https://images.unsplash.com/photo-1544979407-1204ff29f490?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80" alt="" srcset="" />
      </Div>

    </Slider>
  );
}

