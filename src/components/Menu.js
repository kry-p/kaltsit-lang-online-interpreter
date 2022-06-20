/**
 * Menu
 */
import styled from 'styled-components';

const Menu = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  padding: 1rem 1rem 0rem 1rem;

  @media (min-width: 512px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 1rem 0rem 0rem 1rem;
  }
`;

export default Menu;
