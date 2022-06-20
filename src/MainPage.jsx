/**
 * Main page
 */
// React core
import React, { useState, useRef, Fragment } from 'react';
// Components
import Background from './components/Background';
import Input from './components/Input';
import Textarea from './components/Textarea';
import Menu from './components/Menu';
import Divider from './components/Divider';
import Modal from './components/Modal';
import { MenuButton, SendButton } from './components/Button';
import {
  Conversation,
  OpponentConversation,
  MyConversation,
} from './components/Conversation';
// Icons
import { BiConversation, BiHelpCircle, BiInfoCircle } from 'react-icons/bi';
// Hooks
import useWindow from './modules/useWindow';
// Modules
import run from './modules/kaltsit';

const tutorial = [
  `박사, 나와 대화하는 법을 안내하도록 하지.`,
  `"켈시어"라는 프로그래밍 언어의 코드로 나에게 말을 걸어라.
그러면 거기에 맞춰서 내가 적절히 대답한다.
그런 건 모르겠다고? 그것도 할 줄 모르나?
왼쪽 사용법 탭에 사용 방법이 기록되어 있으니 참고하도록.`,
  `또, 정상적인 코드로 말을 걸었는데 내가 할 말이 없다면 (할 말 없음)으로 대답한다.`,
];

function MainPage() {
  const window = useWindow();
  const [code, setCode] = useState('');
  const [log, setLog] = useState([
    <OpponentConversation
      thumbnail="/resources/kaltsit-thumbnail.png"
      opponentName="켈시"
      scripts={tutorial}
    />,
  ]);
  const [modal, setModal] = useState(false);
  const conversationLog = useRef();
  const sleep = (time) => new Promise((res) => setTimeout(res, time));
  const handleChange = (e) => setCode(e.target.value);
  const send = async () => {
    const result = run(code);
    setLog([
      ...log,
      <MyConversation script={code} />,
      <OpponentConversation
        thumbnail="/resources/kaltsit-thumbnail.png"
        opponentName="켈시"
        scripts={[result === '' ? '(할 말 없음)' : result]}
      />,
    ]);
    setCode('');
    await sleep(100);
    conversationLog.current.scrollTop = conversationLog.current.scrollHeight;
  };

  return (
    <>
      <Background />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Divider style={{ height: window.height }}>
          <Menu>
            <MenuButton
              icon={<BiConversation size={20} />}
              text="켈시와의 대화"
            />
            <MenuButton
              icon={<BiHelpCircle size={20} />}
              text="사용법"
              onClick={() => {
                setModal(true);
              }}
            />
            <MenuButton icon={<BiInfoCircle size={20} />} text="만든 사람" />
          </Menu>
          <Conversation ref={conversationLog}>
            {log.map((item, index) => (
              <Fragment key={index}>{item}</Fragment>
            ))}
          </Conversation>
          <Input>
            <Textarea
              placeholder="코드를 입력하세요..."
              onChange={handleChange}
              value={code}
            />
            <SendButton text="전송" onClick={send} />
          </Input>
        </Divider>
      </div>
      {/* {modal && (
        <Modal onClose={() => setModal(false)}>
          <MenuButton icon={<BiHelpCircle size={20} />} text="사용법" />
        </Modal>
      )} */}
    </>
  );
}

export default MainPage;
