/**
 * Modal
 */
// React core
import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

import { IoMdClose } from '@react-icons/all-files/io/IoMdClose';
import { RawButton } from './Button';

import { MODAL_DEFAULT, MODAL_FULL } from '../lib/constants';

const Dummy = styled.div``;
const ModalBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  backdrop-filter: blur(10px);
  z-index: 10;
`;

const ModalItem = styled.div`
  display: flex;
  flex-direction: row;

  border: 2px solid white;
  background: rgba(255, 255, 255, 0.8);
  overflow: auto;
`;

const ModalCover = styled.div`
  display: grid;
  grid-template-rows: 4rem auto 1rem;
  width: 100%;
  height: 100%;
  margin: 1rem;
  @media (min-width: 1024px) {
    width: 1024px;
  }
`;

const CloseButtonCover = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Modal = ({ content, onClose, size }) => {
  const modalCard = useRef();
  const modal = useRef();

  // 모달 외부 클릭 감지
  useEffect(() => {
    function handleClickOutside(e) {
      if (modalCard.current && !modalCard.current.contains(e.target)) {
        onClose();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modalCard]);
  return (
    <ModalBlock ref={modal}>
      <Dummy />
      {size === MODAL_FULL && (
        <ModalCover>
          <CloseButtonCover>
            <RawButton item={<IoMdClose size={24} />} />
          </CloseButtonCover>
          <ModalItem ref={modalCard}>{content}</ModalItem>
        </ModalCover>
      )}
      {size === MODAL_DEFAULT && (
        <ModalItem ref={modalCard}>{content}</ModalItem>
      )}
      <Dummy />
    </ModalBlock>
  );
};

export default Modal;
