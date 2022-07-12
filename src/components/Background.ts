/**
 * Background
 */
// Styled-components
import styled from 'styled-components';

// StyledComponent
const StyledBackground = styled.div`
  position: fixed;
  top: -12.5vh;
  left: -12.5vw;

  width: 125vw;
  height: 125vh;

  background-image: url(/resources/image/bg.jpg);
  background-size: cover;
  background-position: center;
  filter: brightness(45%) blur(10px);
  z-index: -1;
`;

export default StyledBackground;
