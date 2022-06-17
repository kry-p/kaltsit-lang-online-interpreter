import React from 'react';
import styled from 'styled-components';

import Background from './components/Background';
import useWindow from './modules/useWindow';
import { MenuButton } from './components/Button';
import {
  Conversation,
  ConversationItem,
  Bubble,
  OpponentConversation,
} from './components/Conversation';
import Textarea from './components/Textarea';

import { GiMissileLauncher, GiInfo } from 'react-icons/gi';

const firstTutorial = String.raw`박사, 나와 대화하는 법을 안내하도록 하지.`;
const secondTutorial =
  String.raw`"켈시어"라는 프로그래밍 언어의 코드로 나에게 말을 걸어라.
그러면 거기에 맞춰서 내가 적절히 대답한다.
그런 건 모르겠다고? 그것도 할 줄 모르나?
왼쪽 사용법 탭에 사용 방법이 기록되어 있으니 참고하도록.`.replace(
    /(\n|\r\n)/g,
    '<br />',
  );

const Divider = styled.div`
  display: grid;
  grid-template-columns: 0fr 1fr;
  grid-template-rows: auto 12rem;

  @media (min-width: 512px) {
    grid-template-columns: 12rem auto;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 12rem 768px;
  }
`;

const LeftMenu = styled.div`
  display: none;
  padding: 1rem 0rem 1rem 1rem;

  button {
    margin-bottom: 1rem;
  }

  @media (min-width: 512px) {
    display: flex;
    flex-direction: column;
  }
`;

function MainPage() {
  const window = useWindow();

  return (
    <>
      <Background />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Divider style={{ height: window.height }}>
          <LeftMenu>
            <MenuButton>
              <GiMissileLauncher size={20} />
              <div style={{ paddingLeft: '0.5rem' }}>켈시와의 대화</div>
            </MenuButton>
            <MenuButton>
              <GiInfo size={20} />
              <div style={{ paddingLeft: '0.5rem' }}>사용법</div>
            </MenuButton>
          </LeftMenu>
          <Conversation>
            <OpponentConversation
              thumbnail="/resources/kaltsit-thumbnail.png"
              opponentName="켈시"
              scripts={[firstTutorial, secondTutorial]}
            />
          </Conversation>
          <div
            style={{
              background: 'rgba(0, 0, 0, 0.5)',
              margin: '0rem 1rem 1rem 1rem',
              border: '2px solid white',
              gridColumn: '2 / 2',
              padding: '0.5rem',
              display: 'grid',
              gap: '0.5rem',
              gridTemplateColumns: 'auto 4rem',
            }}
          >
            <Textarea placeholder="코드를 입력하세요..." />
            <MenuButton small centered>
              전송
            </MenuButton>
          </div>
        </Divider>
      </div>
    </>
  );
}

export default MainPage;
