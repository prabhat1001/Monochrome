import React from "react";
import styled from "styled-components";

const Page3 = () => {
  return (
    <Container>
      <ContentBox>
        <Heading>We create stories.</Heading>
        <SubHeading>
          A killer narrative will turn your readers into raving fans.
        </SubHeading>
        <Dash></Dash>
        <CardsContainer>
          <Cards>
            <Card>
              <img src="/images/card-1.jpg"></img>
              <Details>
                <h3>OVERCOMING CREATIVE BLOCK</h3>
                <p>Brian Gardner . May 1, 2017</p>
              </Details>
            </Card>
            <Card>
              <img src="/images/card-2.jpg"></img>
              <Details>
                <h3>WHY COMMUNICATION IS KEY</h3>
                <p>Brian Gardner . May 1, 2017</p>
              </Details>
            </Card>
          </Cards>
          <Cards>
            <Card>
              <img src="/images/card-3.jpg"></img>
              <Details>
                <h3>THE PATH OF LEAST RESISTENCE</h3>
                <p>Brian Gardner . May 1, 2017</p>
              </Details>
            </Card>
            <Card>
              <img src="/images/card-5.jpg"></img>
              <Details>
                <h3>HOW TO REACH NEW HEIGHTS</h3>
                <p>Brian Gardner . May 1, 2017</p>
              </Details>
            </Card>
          </Cards>
        </CardsContainer>
      </ContentBox>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 170vh;

  //for smaller screens
  @media (min-width: 320px) and (max-width: 425px) {
    height: 260vh;
  }
`;

const ContentBox = styled.div`
  padding-top: 2rem;
  position: absolute;
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
  border-bottom: #000 2px solid;
`;

const CardsContainer = styled.div`
  /* background-color: brown; */
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;

  //for smaller screens
  @media (min-width: 320px) and (max-width: 425px) {
    height: 200vh;
    margin-top: 40px;
    justify-content: space-around;
  }
`;

const Cards = styled.div`
  /* background-color: #ff8040; */
  width: 100%;
  height: 50%;
  display: flex;
  /* margin-top: 20px; */
  justify-content: space-evenly;
  align-items: center;
  /* border: 2px solid black; */

  //for smaller screens
  @media (min-width: 320px) and (max-width: 425px) {
    flex-direction: column;

    height: 50%;
    margin-top: 20px;
  }
`;

const Card = styled.div`
  width: 45%;
  height: 100%;
  /* background-color: beige; */
  padding: 1.5rem;
  border-radius: 5px;

  /* border: 2px solid black; */

  :hover {
    transform: scale(1.02);
    transition: all 0.3s ease-in-out;
    box-shadow: 2px 2px 10px #9b9b9b;
  }

  img {
    width: 100%;
    height: 80%;
    object-fit: cover;
    filter: grayscale(100%);
    border-radius: 5px;
  }

  @media (min-width: 320px) and (max-width: 425px) {
    width: fit-content;
    height: fit-content;
  }
`;

const Details = styled.div`
  width: 100%;
  height: 20%;
  /* background-color: #8080c0; */
  font-family: "Nunito", sans-serif;

  h3 {
    font-size: 1rem;
    // for small screens
    @media (min-width: 320px) and (max-width: 425px) {
      font-size: 0.8rem;
    }
  }

  p {
    font-size: 0.8rem;
    color: #444;
    // for small screens
    @media (min-width: 320px) and (max-width: 425px) {
      font-size: 0.6rem;
    }
  }
`;

export default Page3;
