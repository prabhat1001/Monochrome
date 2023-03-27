import React from "react";
import styled from "styled-components";
const Page1 = () => {
  return (
    <MainConatainer>
      <ContentBox>
        <Heading>We build experience.</Heading>
        <SubHeading>
          A minimalist approach is the only way to design a website.
        </SubHeading>
        <Dash></Dash>
        <Cards>
          <Card>
            <h3>DESIGN</h3>
            <p>
              With an emphasis on typography, white spaces, and mobile-optimized
              design, your website will look absolutely breathtaking.
            </p>
            <Button>
              <a href="#">Learn More</a>
            </Button>
          </Card>
          <Card>
            <h3>CONTENT</h3>
            <p>
              Our team will teach you the art of writing audience-focused
              content that will help you achieve the success you truly deserve.
            </p>
            <Button>
              <a href="#">Learn More</a>
            </Button>
          </Card>
          <Card>
            <h3>STRATEGY</h3>
            <p>
              We help creative entrepreneurs build their digital business by
              focussing on three key elements of a successful online platform.
            </p>
            <Button>
              <a href="#">Learn More</a>
            </Button>
          </Card>
        </Cards>
      </ContentBox>
    </MainConatainer>
  );
};

const MainConatainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fff;

  //for smaller screens
  @media (min-width: 320px) and (max-width: 425px) {
    height: 180vh;
    margin-bottom: 20vh;
  }
`;

const ContentBox = styled.div`
  padding-top: 2rem;
  position: relative;
  top: 10vh;
  left: 10%;
  width: 80%;
  height: 80%;
  /* background-color: #cd9bff; */

  //for smaller screens
  @media (min-width: 320px) and (max-width: 425px) {
    height: 100%;
  }
`;

const Heading = styled.div`
  font-size: 2.6rem;
  font-weight: 700;
  /* background-color: aquamarine; */
  color: #000;
  width: 100%;
  height: 10vh;
  font-family: "Open Sans", sans-serif;
  margin-left: 1.6rem;

  //for smaller screens
  @media (min-width: 320px) and (max-width: 425px) {
    font-size: 2.3rem;
    line-height: 2.5rem;
  }
`;

const SubHeading = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  /* background-color: #000; */
  color: #444;
  width: 80%;
  height: 5vh;
  margin-left: 1.6rem;
  font-family: "Nunito", sans-serif;
  line-height: 1.5rem;

  //for smaller screens
  @media (min-width: 320px) and (max-width: 425px) {
    width: 85%;
    height: 10vh;
    display: flex;
    align-items: center;
    margin-top: 30px;
  }
`;

const Dash = styled.div`
  width: 25px;
  height: 7vh;
  margin-left: 1.6rem;
  /* background-color: #444; */
  color: #000;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: "Open Sans", sans-serif;
  border-bottom: #000 2px solid;
`;

const Cards = styled.div`
  width: 100%;
  height: 50vh;
  /* background-color: #c0c0c0; */
  display: flex;
  justify-content: space-between;
  /* align-items: center; */

  //for smaller screens
  @media (min-width: 320px) and (max-width: 425px) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  /* background-color: #718096; */
  /* border: 2px solid silver; */
  padding: 1.6rem;
  margin-top: 20px;
  font-family: "Nunito", sans-serif;
  width: 30%;
  height: fit-content;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;

  h3 {
    margin-bottom: 10px;
    cursor: default;
  }

  p {
    margin-bottom: 40px;
    cursor: default;
  }

  :hover {
    box-shadow: 2px 2px 10px #9b9b9b;
    transform: scale(1.015);
  }

  //for smaller screens
  @media (min-width: 320px) and (max-width: 425px) {
    width: 100%;
  }
`;

const Button = styled.div`
  background-color: #000;
  width: 70%;
  font-family: "Bebas Neue", cursive;
  font-size: 1.2rem;
  padding: 0.6rem;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  a {
    text-decoration: none;
    color: #fff;
  }
  &:hover {
    background-color: #444;
  }

  // for small screens
  @media (min-width: 320px) and (max-width: 425px) {
    width: 50%;
  }
`;

export default Page1;
