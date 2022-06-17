import styled from 'styled-components';
import palette from '../lib/palette';

const Icon = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1rem;
  border-radius: 1rem;
  border: 0rem;

  color: ${palette.gray[2]};

  background-color: ${palette.cyan[5]};
  transition: all 0.15s ease-in-out;

  &:hover {
    background-color: ${palette.cyan[8]};
  }
`;

export default Icon;
