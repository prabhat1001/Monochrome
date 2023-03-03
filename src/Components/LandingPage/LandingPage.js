import React from 'react'
import styled from 'styled-components'
import NavBar from '../NavBar/NavBar'
import Page1 from '../ContentPages/Page1'
import Page2 from '../ContentPages/Page2'
import './LandingPage.css'

const LandingPage = () => {
  return (
    <>
    <NavBar />
    <MainPage>
      <img src='/images/building-1.jpg'></img>
      <TextBox>
      <Heading>We crush minimal design.</Heading>
      <SubHeading>MONOCHROME is a creative agency based in Chicago. We developed the Genesis Framework and build mobile-optimized themes for WordPress.</SubHeading>
      </TextBox>
    </MainPage>
    <Page1 />
    <Page2 />
    </>
  )
}

const MainPage = styled.div`
 background-color: #000;
 width: 100%;
 height: 100vh;

  img{
    width: 100%;
    height: 100%;
    filter: opacity(20%) grayscale(100%);
  }

  //for medium screens
  @media (min-width: 426px) and (max-width: 768px){
    width: fit-content;
  }

  //for smaller screens
  @media (min-width: 320px) and (max-width: 425px){

  }


`;

const TextBox = styled.div`
  position: absolute;
  top: 30%;
  left: 10%;
  /* transform: translate(-50%, -50%); */
  width: 40%;
  height: 50vh;
  /* background-color: #fff; */

  //for medium screens
  @media (min-width: 426px) and (max-width: 768px){
  }

  //for smaller screens
  @media (min-width: 320px) and (max-width: 425px){
    left: 5%;
    top: 20%;
    width: 80%;
    height: 70vh;
  }
`;

const Heading = styled.div`
  width: 60%;
  height: 70%;
  display: flex;
  align-items: center;
  /* background-color: #8080ff; */
  font-size: 4rem;
  color: #fff;
  line-height: 4rem;
  font-weight: 600;
  font-family: 'Open Sans', sans-serif;

  //for medium screens
  @media (min-width: 426px) and (max-width: 768px){
  }

  //for smaller screens
  @media (min-width: 320px) and (max-width: 425px){
    width: 80%;
    height: 60%;
    line-height: 3.5rem;
  }
`;

const SubHeading = styled.div`
  width: 90%;
  height: 20%;
  /* background-color: brown; */
  font-family: 'Nunito', sans-serif;
  display: flex;
  align-items: center;
  line-height: 1.2rem;
  font-weight: 500;
  color: #fff;


//for medium screens
@media (min-width: 426px) and (max-width: 768px){
}

//for smaller screens
@media (min-width: 320px) and (max-width: 425px){
  width: 100%;
  font-size: 0.85rem;
}

`;
export default LandingPage;





// //for larger screens
// @media (min-width: 769px){
// }

// //for medium screens
// @media (min-width: 426px) and (max-width: 768px){
// }

// //for smaller screens
// @media (min-width: 320px) and (max-width: 425px){
// }