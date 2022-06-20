/**
 * App divider
 */
import styled from 'styled-components';

const Divider = styled.div`
  display: grid;
  grid-template-rows: 5rem auto 8rem;

  @media (min-width: 512px) {
    grid-template-rows: auto 12rem;
    grid-template-columns: 12rem auto;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 12rem 768px;
  }
`;

export default Divider;