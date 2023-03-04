import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <MainContent>
        <Logo>
          <img src="/images/logo-w.png" alt="logo" />
        </Logo>
        <Heading>
          <p>
            Handcrafted with{" "}
            <span>
              <img src="/images/love.png"></img>
            </span>{" "}
            in Chicago . Powered by StudioPress
          </p>
        </Heading>
        <Links>
          <ul>
            <li>
              <a href="#">FACEBOOK</a>
            </li>
            <li>
              <a href="#">TWITTER</a>
            </li>
            <li>
              <a href="#">INSTAGRAM</a>
            </li>
          </ul>
        </Links>
      </MainContent>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 30vh;
  background-color: #000;
  display: flex;
  align-items: center;
`;

const MainContent = styled.div`
  width: 40%;
  height: 80%;
  margin-left: auto;
  margin-right: auto;
  /* background-color: #8080c0; */
  display: flex;
  flex-direction: column;
  align-items: center;
  // for small screens
  @media (min-width: 320px) and (max-width: 425px) {
    width: 80%;
  }
`;

const Logo = styled.div`
  width: 65px;
  height: 60px;
  /* background-color: #444; */
  margin-left: auto;
  margin-right: auto;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Heading = styled.div`
  width: 100%;
  height: 20%;
  /* background-color: #456; */
  font-size: 1rem;
  font-family: "Nunito", sans-serif;
  color: #fff;
  text-align: center;

  p {
    span {
      img {
        width: 12px;
        height: 12px;
      }
    }
  }

  // for small screens
  @media (min-width: 320px) and (max-width: 425px) {
    font-size: 0.8rem;
    width: 70%;
  }
`;

const Links = styled.div`
  width: 50%;
  height: 20%;
  /* background-color: #ff0080; */
  margin-left: auto;
  margin-right: auto;
  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    li {
      list-style: none;
      a {
        text-decoration: none;
        color: #fff;
        font-size: 0.8rem;
        letter-spacing: 2px;
        font-family: "Bebas Neue", cursive;
      }
    }
  }
  // for small screens
  @media (min-width: 320px) and (max-width: 425px) {
    width: 60%;
    margin-top: 10px;
  }
`;

export default Footer;
