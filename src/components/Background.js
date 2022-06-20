/**
 * Background
 */
import styled from 'styled-components';

const Background = styled.div`
  position: fixed;
  top: -50vh;
  left: -50vw;

  width: 200vw;
  height: 200vh;

  background-image: url(./resources/bg.jpg);
  filter: brightness(30%) blur(5px);
  z-index: -1;
`;

export default Background;
