/**
 * Main page
 */
// React core
import * as React from 'react';
import { useState, useRef } from 'react';

// Framer-motion
import { motion, AnimatePresence } from 'framer-motion';
import animation from './styles/animation';

// Components
import { MenuButton, SendButton } from './components/Button';
import {
  Conversation,
  OpponentConversation,
  MyConversation,
} from './components/Conversation';

import StyledBackground from './components/Background';
import Divider from './components/Divider';
import Input from './components/Input';
import Markdown from './components/Markdown';
import Menu from './components/Menu';
import Modal from './components/Modal';
import Textarea from './components/Textarea';

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
import { MODAL } from './lib/constants';
import {
  MESSAGE_KALTSIT_TUTORIAL,
  MESSAGE_PRTS_ON_CLEAR,
  PLACEHOLDER,
  BUTTON,
  USERNAME,
  MESSAGE_PRTS_UNDEFINED_OPERATION,
  EXAMPLE_CODE,
} from './lib/scripts';

const MainPage = () => {
  const window = useWindow();
  const [modal, setModal] = useState<boolean>(false);
  const [code, setCode] = useState<string>('');
  const [log, setLog] = useState([
    <OpponentConversation
      thumbnail="/resources/image/kaltsit-thumbnail.png"
      opponentName={USERNAME.KALTSIT}
      scripts={MESSAGE_KALTSIT_TUTORIAL}
    />,
  ]);
  const conversationLog =
    useRef() as React.MutableRefObject<HTMLHeadingElement>;
  const onChangeText = (e: React.BaseSyntheticEvent | MouseEvent) =>
    setCode(e.target.value);
  const send = async () => {
    let result: string = '';
    let example: string | undefined = '';
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
            opponentName={USERNAME.PRTS}
            scripts={MESSAGE_PRTS_UNDEFINED_OPERATION}
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
          opponentName={USERNAME.PRTS}
          scripts={MESSAGE_PRTS_UNDEFINED_OPERATION}
        />,
      ]);
    } else {
      setLog([
        ...log,
        <MyConversation script={example !== '' ? example : code} />,
        <OpponentConversation
          thumbnail="/resources/image/kaltsit-thumbnail.png"
          opponentName={USERNAME.KALTSIT}
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
        .filter((item, index) => index === -1)
        .concat(
          <OpponentConversation
            thumbnail="/resources/image/prts-thumbnail.png"
            opponentName={USERNAME.PRTS}
            scripts={[...MESSAGE_PRTS_ON_CLEAR]}
          />,
        ),
    );
  };

  return (
    <>
      <StyledBackground />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Divider style={{ height: window.height }}>
          <Menu>
            <MenuButton
              icon={<BiCommentX size={20} />}
              text={BUTTON.CLEAR_LOG}
              aria-label="menu-button-remove-chat-log"
              onClick={() => {
                clear();
              }}
            />
            <MenuButton
              icon={<BiHelpCircle size={20} />}
              text={BUTTON.HOWTO}
              aria-label="menu-button-show-help"
              onClick={() => {
                setModal(true);
              }}
            />
            <MenuButton
              icon={<AiOutlineGithub size={20} />}
              text={BUTTON.GITHUB_REPO}
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
              placeholder={PLACEHOLDER}
              onChange={onChangeText}
              value={code}
            />
            <SendButton text={BUTTON.SEND} onClick={send} />
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
              content={<Markdown />}
              size={MODAL.FULL}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MainPage;
