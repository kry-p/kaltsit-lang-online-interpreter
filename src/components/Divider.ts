/**
 * App divider
 */
// Styled-components
import styled from 'styled-components';

// StyledComponent
const Divider = styled.div`
  display: grid;
  grid-template-rows: 5rem auto 8rem;

  @media (min-width: 512px) {
    grid-template-rows: auto 12rem;
    grid-template-columns: 12rem calc(100vw - 12rem);
  }
  @media (min-width: 1024px) {
    grid-template-columns: 12rem calc(1024px - 12rem);
  }
`;

export default Divider;
