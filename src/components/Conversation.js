import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../lib/palette';

export const Conversation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 2px solid white;

  margin: 1rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.5);

  overflow: auto;
`;

export const ConversationItem = styled.div`
  display: flex;
  justify-content: flex-start;

  border-radius: 1rem;
  border: 0rem;

  padding-bottom: 1rem;
  word-break: break-word;

  ${(props) =>
    props.left &&
    css`
      padding-left: 1rem;
      padding-right: 1rem;
      justify-content: flex-start;
    `}
  ${(props) =>
    props.right &&
    css`
      padding-left: 1rem;
      justify-content: flex-end;
    `}
`;

export const Bubble = styled.div`
  border-radius: 1rem;
  padding: 1rem;

  ${(props) =>
    props.left &&
    css`
      background: ${palette.green[3]};
    `}
  ${(props) =>
    props.right &&
    css`
      background: ${palette.gray[3]};
    `}
`;

const StyledOpponentConversation = styled.div`
  display: grid;
  grid-template-columns: 4rem auto;
`;

const StyledOpponentThumbnail = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 2rem;
`;

const StyledOpponentName = styled.div`
  padding-left: 1rem;
  padding-bottom: 0.5rem;
  font-size: 1.2rem;
  color: white;
`;

const StyledOpponentConversationDescription = styled.div`
  display: grid;
  grid-template-rows: 1fr;
`;

export const OpponentConversation = ({ thumbnail, opponentName, scripts }) => {
  return (
    <StyledOpponentConversation>
      <StyledOpponentThumbnail
        style={{ background: `url(${thumbnail})`, backgroundSize: 'cover' }}
      />
      <StyledOpponentConversationDescription>
        <StyledOpponentName>{opponentName}</StyledOpponentName>
        {scripts.map((script) => (
          <ConversationItem key={script} left>
            <Bubble left dangerouslySetInnerHTML={{ __html: script }} />
          </ConversationItem>
        ))}
      </StyledOpponentConversationDescription>
    </StyledOpponentConversation>
  );
};
