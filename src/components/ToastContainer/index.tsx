import React from 'react';

import { ToastMessageData } from '../../hooks/ToastContext';

import { Container } from './styles';
import Toast from './Toast';

interface ToastContainerProps {
  messages: ToastMessageData[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  return (
    <>
      <Container>
        {messages.map((message) => (
          <Toast key={message.id} message={message} />
        ))}
      </Container>
    </>
  );
};

export default ToastContainer;
