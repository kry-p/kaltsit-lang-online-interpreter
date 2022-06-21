/**
 * Main page
 */
// React core
import React, { useState, useRef, useEffect, Fragment } from 'react';

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
import { BiCommentX, BiHelpCircle, BiInfoCircle } from 'react-icons/bi';
import { AiOutlineGithub } from 'react-icons/ai';
// Markdown
import MarkdownPreview from '@uiw/react-markdown-preview';
// Hooks
import useWindow from './modules/useWindow';
// Modules
import run from './modules/kaltsit';
// Misc.
import { MODAL_FULL } from './lib/constants';
import { motion, AnimatePresence } from 'framer-motion';
import animation from './styles/animation';

const tutorial = [
  `박사, 나와 대화하는 법을 안내하도록 하지.`,
  `"켈시어"라는 프로그래밍 언어의 코드로 나에게 말을 걸어라.
그러면 거기에 맞춰서 내가 적절히 대답한다.
그런 건 모르겠다고? 그것도 할 줄 모르나?
왼쪽 사용법 탭에 사용 방법이 기록되어 있으니 참고하도록.`,
  `또, 정상적인 코드로 말을 걸었는데 내가 할 말이 없다면 (할 말 없음)으로 대답한다.`,
];
const onClear = [`(이전 대화 기록을 모두 지웠습니다.)`];

const PageComponent = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('resources/manual.md')
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <MarkdownPreview
      style={{ margin: '1rem', background: 'transparent' }}
      source={content}
    />
  );
};

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
  const [modalIndex, setModalIndex] = useState(-1);
  const conversationLog = useRef();
  const sleep = (time) => new Promise((res) => setTimeout(res, time));
  const handleChange = (e) => setCode(e.target.value);
  const send = async () => {
    // 비어 있으면 무시
    if (code === '') return;
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

  const clear = async () => {
    setLog(
      log
        .filter((index) => index === -1)
        .concat(
          <OpponentConversation
            thumbnail="/resources/prts-thumbnail.png"
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
              onClick={() => {
                clear();
              }}
            />
            <MenuButton
              icon={<BiHelpCircle size={20} />}
              text="사용법"
              onClick={() => {
                setModalIndex(0);
              }}
            />
            <MenuButton
              icon={<AiOutlineGithub size={20} />}
              text="GitHub"
              onClick={() =>
                (location.href =
                  'https://github.com/kry-p/kaltsit-lang-online-interpreter')
              }
            />
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
      <AnimatePresence exitBeforeEnter>
        {modalIndex === 0 && (
          <motion.div
            initial={animation.initial}
            animate={animation.animate}
            exit={animation.exit}
          >
            <Modal
              onClose={() => setModalIndex(-1)}
              content={<PageComponent />}
              size={MODAL_FULL}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default MainPage;
