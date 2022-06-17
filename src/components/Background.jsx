import styled, { keyframes } from 'styled-components';

const roll = keyframes`
  0% {
    transform: rotate(20deg);
  }
  50% {
    transform: rotate(-20deg);
  }
  100% {
    transform: rotate(20deg);
  }
`;

const Background = styled.div`
  position: fixed;
  top: -50vh;
  left: -50vw;

  width: 200vw;
  height: 200vh;

  background-image: url(./resources/bg.jpg);
  filter: brightness(30%) blur(5px);

  /* animation: ${roll} 5s ease-in-out infinite; */
  z-index: -1;
`;

export default Background;
