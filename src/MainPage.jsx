/**
 * Main page
 */
// React core
import React, { useState, useRef } from 'react';
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
import { BiCommentX } from '@react-icons/all-files/bi/BiCommentX';
import { BiHelpCircle } from '@react-icons/all-files/bi/BiHelpCircle';
import { AiOutlineGithub } from '@react-icons/all-files/ai/AiOutlineGithub';
// Hooks
import useWindow from './modules/useWindow';
// Modules
import run from './modules/kaltsit';
import sleep from './modules/sleep';
// Misc.
import { EXAMPLE_CODE, MODAL_FULL } from './lib/constants';
import { motion, AnimatePresence } from 'framer-motion';
import animation from './styles/animation';
import Markdown from './components/Markdown';

const tutorial = [
  `박사, 나와 대화하는 법을 안내하도록 하지.`,
  `"켈시어"라는 프로그래밍 언어의 코드로 나에게 말을 걸어라.
그러면 거기에 맞춰서 내가 적절히 대답한다.
그런 건 모르겠다고? 그것도 할 줄 모르나?
왼쪽 사용법 탭에 사용 방법이 기록되어 있으니 참고하도록.`,
  `또, 정상적인 코드로 말을 걸었는데 내가 할 말이 없다면 (할 말 없음)으로 대답한다.`,
  `현재 사용 가능한 예시 코드를 가져오는 명령은 아래와 같다.

  /helloworld - Hello world
  /multi - 구구단`,
];
const onClear = [`(이전 대화 기록을 모두 지웠습니다.)`];

function MainPage() {
  const window = useWindow();
  const [code, setCode] = useState('');
  const [log, setLog] = useState([
    <OpponentConversation
      thumbnail="/resources/image/kaltsit-thumbnail.png"
      opponentName="켈시"
      scripts={tutorial}
    />,
  ]);
  const [modal, setModal] = useState(false);
  const conversationLog = useRef();

  const handleChange = (e) => setCode(e.target.value);
  const send = async () => {
    let result = '';
    let example = '';
    if (code === '') return;
    if (code.startsWith('/')) {
      const command = code.replace(/\//g, '');
      example = EXAMPLE_CODE.get(command);
      if (!example) {
        setLog([
          ...log,
          <MyConversation script={code} />,
          <OpponentConversation
            thumbnail="/resources/image/prts-thumbnail.png"
            opponentName="PRTS"
            scripts={['사용 가능한 명령이 아닙니다.']}
          />,
        ]);
      } else {
        result = run(example);
      }
    } else {
      result = run(code);
    }
    if (code.startsWith('/') && result === '') {
      setLog([
        ...log,
        <MyConversation script={code} />,
        <OpponentConversation
          thumbnail="/resources/image/prts-thumbnail.png"
          opponentName="PRTS"
          scripts={['사용 가능한 명령이 아닙니다.']}
        />,
      ]);
    } else {
      setLog([
        ...log,
        <MyConversation script={example !== '' ? example : code} />,
        <OpponentConversation
          thumbnail="/resources/image/kaltsit-thumbnail.png"
          opponentName="켈시"
          scripts={[result === '' ? '(할 말 없음)' : result]}
        />,
      ]);
    }
    setCode('');
    await sleep(100);
    conversationLog.current.scrollTop = conversationLog.current.scrollHeight;
  };

  const clear = async () => {
    setLog(
      log
        .filter((index) => index === -1)
        .concat(
          <OpponentConversation
            thumbnail="/resources/image/prts-thumbnail.png"
            opponentName="PRTS"
            scripts={[...onClear]}
          />,
        ),
    );
  };

  return (
    <>
      <Background />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Divider style={{ height: window.height }}>
          <Menu>
            <MenuButton
              icon={<BiCommentX size={20} />}
              text="대화록 지우기"
              aria-label="menu-button-remove-chat-log"
              onClick={() => {
                clear();
              }}
            />
            <MenuButton
              icon={<BiHelpCircle size={20} />}
              text="사용법"
              aria-label="menu-button-show-help"
              onClick={() => {
                setModal(true);
              }}
            />
            <MenuButton
              icon={<AiOutlineGithub size={20} />}
              text="GitHub"
              aria-label="menu-button-github-repo"
              onClick={() =>
                (location.href =
                  'https://github.com/kry-p/kaltsit-lang-online-interpreter')
              }
            />
          </Menu>
          <Conversation ref={conversationLog}>
            {log.map((item, index) => (
              <AnimatePresence exitBeforeEnter key={index}>
                <motion.div
                  initial={animation.initial}
                  animate={animation.animate}
                  exit={animation.exit}
                >
                  {item}
                </motion.div>
              </AnimatePresence>
            ))}
          </Conversation>
          <Input>
            <Textarea
              placeholder="코드 또는 명령을 입력하세요..."
              onChange={handleChange}
              value={code}
            />
            <SendButton text="전송" onClick={send} />
          </Input>
        </Divider>
      </div>
      <AnimatePresence exitBeforeEnter>
        {modal && (
          <motion.div
            initial={animation.initial}
            animate={animation.animate}
            exit={animation.exit}
          >
            <Modal
              onClose={() => setModal(false)}
              content={<Markdown markdown="resources/markdown/manual.md" />}
              size={MODAL_FULL}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default MainPage;
