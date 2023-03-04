import React from 'react'
import styled from 'styled-components'

const Notify = () => {
  return (
    <Banner>
        <TextCont>
        <Heading>Hit the ground running with the minimalistic look.</Heading>
        <Button>
            <a href="#">Learn More</a>
        </Button>
        </TextCont>
    </Banner>
  )
}

const Banner = styled.div`
    width: 100%;
    height: 20vh;
    background: linear-gradient(to right,#002aff, #00ccff);
    display: flex;
    align-items: center;
    //for smaller screens
    @media (min-width: 320px) and (max-width: 425px){
       height: 10vh;
    }
`;

const TextCont = styled.div`
    /* background-color: brown; */
    width: 42%;
    height: 10vh;
    margin-top: 2vh;
    margin: auto auto;
    display: flex;
    align-items: center;
    justify-content: space-around;

    // for small screens
    @media (min-width: 320px) and (max-width: 425px){
       width: 80%;
    }
`;


const Heading = styled.div`
    font-size: 1.2rem;
    font-family: 'Nunito', sans-serif;
    color: #fff;
    // for small screens
    @media (min-width: 320px) and (max-width: 425px){
       font-size: 0.7rem;
    }
`;

const Button = styled.div`
    background-color: #fff;
    
    width: 100px;
    height: 50px;
    font-family: 'Bebas Neue', cursive;
    font-size: 1.2rem;
    padding: 0.6rem;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    a{
        text-decoration: none;
        color: #000;

    }
    &:hover{
        transform: scale(1.15);
    }

    // for small screens
    @media (min-width: 320px) and (max-width: 425px){
       font-size: 0.5rem;
       width: 60px;
       height: 30px;
       border-radius: 3px;
    }

`;
export default Notify