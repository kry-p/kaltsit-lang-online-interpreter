/**
 * Conversation
 */
// React core
import * as React from 'react';

// Styled-components
import styled, { css } from 'styled-components';

// Palette
import palette from '../lib/palette';

// Styled-components props interface
interface ConversationInterface {
  left?: boolean;
  right?: boolean;
}

// React functional component variable types
type OpponentConversationProps = {
  thumbnail: string;
  opponentName: string;
  scripts: string[];
};

type MyConversationProps = {
  script: string | undefined;
};

// StyledComponent
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

export const ConversationItem = styled.div<ConversationInterface>`
  display: flex;
  justify-content: flex-start;

  padding-bottom: 1rem;
  border-radius: 1rem;
  border: 0rem;

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

export const Bubble = styled.div<ConversationInterface>`
  padding: 1rem;
  border-radius: 1rem;
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

  color: white;
  font-size: 1.2rem;
`;

const StyledOpponentConversationDescription = styled.div`
  display: grid;
  grid-template-rows: 1fr;
`;

// React functional component
export const OpponentConversation = ({
  thumbnail,
  opponentName,
  scripts,
}: OpponentConversationProps) => {
  return (
    <StyledOpponentConversation>
      <StyledOpponentThumbnail
        style={{
          backgroundImage: `url(${thumbnail})`,
          backgroundSize: 'cover',
        }}
      />
      <StyledOpponentConversationDescription>
        <StyledOpponentName>{opponentName}</StyledOpponentName>
        {scripts.map((script) => (
          <ConversationItem key={script} left>
            <Bubble
              left
              dangerouslySetInnerHTML={{
                __html: String.raw`${script}`.replace(/(\n|\r\n)/g, '<br />'),
              }}
            />
          </ConversationItem>
        ))}
      </StyledOpponentConversationDescription>
    </StyledOpponentConversation>
  );
};

export const MyConversation = ({ script }: MyConversationProps) => {
  return (
    <ConversationItem right>
      <Bubble
        right
        dangerouslySetInnerHTML={{
          __html: String.raw`${script}`.replace(/(\n|\r\n)/g, '<br />'),
        }}
      />
    </ConversationItem>
  );
};
