/**
 * Input
 */
// Styled-components
import styled from 'styled-components';

// StyledComponent
const Input = styled.div`
  display: grid;
  grid-template-columns: auto 4rem;
  gap: 0.5rem;

  border: 2px solid white;
  border-radius: 0px;
  padding: 0.5rem;
  margin: 0rem 1rem 1rem 1rem;

  background: rgba(0, 0, 0, 0.5);
  @media (min-width: 512px) {
    grid-column: 2 / 2;
  }
`;

export default Input;
