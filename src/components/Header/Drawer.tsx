'use client';

import React from 'react';
import styled from 'styled-components';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const DrawerWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  transform: ${(props) =>
    props.isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in-out;
`;

const DrawerOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
`;

const DrawerContent = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 296px;
  max-width: 100%;
  height: 100%;
  background: white;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  padding: 60px 0;
  overflow-y: auto;
  z-index: 15;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 30px;
  color: #797979;
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    top: 40px;
    right: 40px;
    font-size: 42px;
  }
`;

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, children }) => {
  return (
    <DrawerWrapper isOpen={isOpen}>
      <DrawerOverlay onClick={onClose} />
      <DrawerContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        {children}
      </DrawerContent>
    </DrawerWrapper>
  );
};

export default Drawer;
