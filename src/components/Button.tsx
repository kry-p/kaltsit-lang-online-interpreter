/**
 * Button
 */
// React core
import * as React from 'react';

// Styled-components
import styled, { css } from 'styled-components';

// Styled-components props interface
interface MenuButtonInterface {
  iconIncluded: boolean;
  small?: boolean;
  centered?: boolean;
}
// React functional component variable types
type ButtonProps = {
  text?: string;
  iconIncluded?: boolean;
  icon?: React.ReactNode;
  small?: boolean;
  centered?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

// StyledComponent
const StyledMenuButton = styled.button<MenuButtonInterface>`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 1rem;
  border: 2px solid white;
  background: rgba(0, 0, 0, 0.3);

  color: white;
  font-size: 1.15rem;

  transition: all 0.15s ease-in-out;

  &:hover {
    background: rgba(64, 64, 64, 0.3);
  }

  &:active {
    background: rgba(128, 128, 128, 0.3);
  }

  ${(props) =>
    props.iconIncluded &&
    css`
      @media (max-width: 511px) {
        justify-content: center;
        div {
          display: none;
        }
      }
    `}

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
  }
`;

const StyledRawButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1rem;
  background: transparent;
  border: 0px;
  color: white;
  font-size: 1.2rem;
`;

// React functional component
export const MenuButton = ({ icon, text, ...props }: ButtonProps) => (
  <StyledMenuButton {...props} iconIncluded={!!icon}>
    {icon}
    <div style={{ paddingLeft: icon ? '0.5rem' : '0rem' }}>{text}</div>
  </StyledMenuButton>
);

export const SendButton = ({ text, ...props }: ButtonProps) => (
  <MenuButton {...props} small centered text={text} />
);

export const RawButton = ({ icon }: ButtonProps) => (
  <StyledRawButton>{icon}</StyledRawButton>
);
