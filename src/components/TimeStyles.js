import styled from "styled-components";

export const Welcome = styled.div`
  position: absolute;
  text-align: center;
  padding: 1rem;
  top: 25%;
  left: 25%;
  -ms-transform: translate(-40%, 40%);
  transfrom: translate(-40%, 40%);
`;

export const TimeStamp = styled.p`
  font-size: 8rem;
  font-weight: 500;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 600px) {
    font-size: 5rem;
  }
`;

export const Greeting = styled.p`
  font-size: 4rem;
  font-weight: 600;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 600px) {
    font-size: 3rem;
  }
`;
