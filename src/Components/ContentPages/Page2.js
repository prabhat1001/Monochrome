import React from "react";
import styled from "styled-components";
import "./Page2.css";

const Page2 = () => {
  return (
    <Container>
      <img src="/images/Building.jpg"></img>
      <ContentBox>
        <Heading>We design brands.</Heading>
        <SubHeading>
          A single look is all you need to crush your competetion.
        </SubHeading>
        <Dash></Dash>
        <Brands>
          <Card>
            <Item1>les avenirs</Item1>
            <Item2>avec'simple</Item2>
            <Item3>WHITESPACE</Item3>
          </Card>
          <Card>
            <Item4>minimalism</Item4>
            <Item5>barcelona33</Item5>
            <Item6>
              smooth<span>VANILLA</span>
            </Item6>
          </Card>
        </Brands>
      </ContentBox>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 70vh;
  background-color: #000;

  img {
    width: 100%;
    height: 100%;
    filter: opacity(20%) grayscale(100%);
  }

  //for smaller screens
  @media (min-width: 320px) and (max-width: 425px) {
    height: 100vh;
  }
`;

const ContentBox = styled.div`
  padding-top: 2rem;
  position: absolute;
  top: 10vh;
  left: 10%;
  width: 80%;
  height: 50vh;
  /* background-color: #cd9bff; */

  //for smaller screens
  @media (min-width: 320px) and (max-width: 425px) {
    height: 80vh;
  }
`;

const Heading = styled.div`
  font-size: 2.6rem;
  font-weight: 700;
  /* background-color: aquamarine; */
  color: #fff;
  width: 80%;
  height: 10vh;
  font-family: "Open Sans", sans-serif;
  margin-left: 1.6rem;

  //for smaller screens
  @media (min-width: 320px) and (max-width: 425px) {
    width: 80%;
    height: 15vh;
    font-size: 2.3rem;
    line-height: 2.5rem;
  }
`;

const SubHeading = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  /* background-color: #000; */
  color: #fff;
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
    margin-top: 10px;
  }
`;

const Dash = styled.div`
  width: 25px;
  height: 7vh;
  margin-left: 1.6rem;
  /* background-color: #444; */
  font-size: 1.5rem;
  font-weight: 700;
  font-family: "Open Sans", sans-serif;
  border-bottom: #fff 2px solid;
`;

const Brands = styled.div`
  display: flex;
  width: 100%;
  height: 20vh;
  /* background-color: silver; */
  //for smaller screens
  @media (min-width: 320px) and (max-width: 425px) {
    flex-direction: column;
    height: 30vh;
    margin-top: 40px;
  }
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50%;
  /* background-color: blanchedalmond; */
  /* border: 1px solid #000; */

  //for smaller screens
  @media (min-width: 320px) and (max-width: 425px) {
    width: 100%;
    height: 10vh;
  }
`;

const Item1 = styled.div`
  font-family: "Oleo Script", cursive;
  font-size: 1.9rem;
  color: #fff;

  //for smaller screens
  @media (min-width: 320px) and (max-width: 425px) {
    font-size: 1rem;
  }
`;

const Item2 = styled.div`
  font-family: "Zen Kaku Gothic New", sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  color: #fff;
  //for smaller screens
  @media (min-width: 320px) and (max-width: 425px) {
    font-size: 1rem;
  }
`;

const Item3 = styled.div`
  font-family: "Playfair Display", serif;
  font-weight: 500;
  font-size: 1.5rem;
  color: #fff;
  //for smaller screens
  @media (min-width: 320px) and (max-width: 425px) {
    font-size: 1rem;
  }
`;

const Item4 = styled.div`
  font-family: "Sacramento", cursive;
  font-size: 2rem;
  color: #fff;
  //for smaller screens
  @media (min-width: 320px) and (max-width: 425px) {
    font-size: 1rem;
  }
`;

const Item5 = styled.div`
  font-family: "Gloock", serif;
  font-size: 1.5rem;
  color: #fff;
  //for smaller screens
  @media (min-width: 320px) and (max-width: 425px) {
    font-size: 1rem;
  }
`;

const Item6 = styled.div`
  font-family: "Cormorant Garamond", serif;
  font-size: 1.3rem;
  font-weight: 400;
  color: #fff;
  span {
    font-family: "Jost", sans-serif;
    font-weight: 300;
  }

  //for smaller screens
  @media (min-width: 320px) and (max-width: 425px) {
    font-size: 1rem;
  }
`;

export default Page2;
