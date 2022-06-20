/**
 * Modal
 */
// React core
import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

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

const Modal = ({ children, onClose }) => {
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
      <div ref={modalCard}>{children}</div>
      <Dummy />
    </ModalBlock>
  );
};

export default Modal;
