import React from 'react'

import styled from 'styled-components'
import './NavBar.css'

const NavBar = () => {
  return (
    <Nav>
      <Logo>
        <img src="/images/logo.png"></img>
      </Logo>
      <Links>
        <a href='#'>Sample</a>
        <a href='#'>Features</a>
        <a href='#'>Layouts</a>
        <a href='#'>Our Shop</a>
        <a href='#'>Buy Theme</a>
        <Search>
          <img src='/images/search.png'></img>
        </Search>
      </Links>
    </Nav>
  )
}

const Nav = styled.div`
  position: absolute;
  z-index: 1;
  display: flex;
  align-items: center;
  width: 100%;
  height: 76px;
  background-color: #fff;
  /* border-bottom: #000 solid 1px;   */

  // for small screens
  @media (min-width: 320px) and (max-width: 425px){
    width: 100%;
      height: 60px;
  }
`;

const Logo = styled.div`
  position: relative;
  left: 2%;
  width: 60px;
  height: 60px;
  border: #000 solid 1px;  

  img{
    width: 100%;
    height: 100%;
  }
  // for small screens
  @media (min-width: 320px) and (max-width: 425px){
      width: 40px;
      height: 40px;
  }

`;

const Links = styled.div`
  position: absolute;
  display: flex;
  right: 20px;
  /* background-color: #8080ff; */
  width: 40%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  /* border: #000 solid 1px;   */
  a{
    color: #444444;
    text-decoration: none;
    font-size: 1rem;
    font-family: 'Nunito', sans-serif;
    /* background-color: brown; */
    // for small screens
    @media (min-width: 320px) and (max-width: 425px){
        font-size: 0.8rem;
    }
  }

  // for small screens
  @media (min-width: 320px) and (max-width: 425px){
       width: 80%;
       height: 80%;
  }
`;

const Search = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  /* border: #000 solid 1px; */
  img{
    width: 100%;
    height: 100%;

    :hover{
      cursor: pointer;
    }
  }

  // for small screens
  @media (min-width: 320px) and (max-width: 425px){
      width: 20px;
      height: 20px;
  }


`;
export default NavBar