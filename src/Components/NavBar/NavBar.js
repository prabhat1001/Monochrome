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
  position: relative;
  display: flex;
  width: 100%;
  height: 64px;
  background-color: #fff;
  border-bottom: #000 solid 1px;  
`;

const Logo = styled.div`
  position: relative;
  left: 20px;
  width: 5%;
  height: 100%;
  border: #000 solid 1px;  

  img{
    width: 100%;
    height: 100%;
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
  border: #000 solid 1px;  
  a{
    color: #444444;
    text-decoration: none;
    font-size: 1rem;
    font-family: 'Nunito', sans-serif;
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


`;
export default NavBar