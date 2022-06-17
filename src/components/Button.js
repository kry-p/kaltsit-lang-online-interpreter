import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../lib/palette';

export const MenuButton = styled.button`
  border: 2px solid white;
  background: rgba(0, 0, 0, 0.3);
  padding: 1rem;

  color: white;
  display: flex;
  flex-direction: row;
  font-size: 1.2rem;
  font-family: MinSans-Medium;
  align-items: center;

  &:hover {
    background: rgba(64, 64, 64, 0.3);
  }

  ${(props) =>
    props.small &&
    css`
      padding: 0.5rem;
      font-size: 1rem;
    `}

  ${(props) =>
    props.centered &&
    css`
      justify-content: center;
    `}
`;
