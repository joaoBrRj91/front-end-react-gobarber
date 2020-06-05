import React from 'react';

import { FiAlertCircle, FiXCircle } from 'react-icons/fi';
import { Container, Toast } from './styles';

const ToastContainer: React.FC = () => {
  return (
    <>
      <Container>
        <Toast type="error" hasDescription>
          <FiAlertCircle size={20} />

          <div>
            <strong>Aconteceu um erro</strong>
            <p>Não foi possível fazer login na aplicação</p>
          </div>

          <button type="button">
            <FiXCircle size={18} />
          </button>
        </Toast>

        <Toast type="info" hasDescription={false}>
          <FiAlertCircle size={20} />

          <div>
            <strong>Credências expiraram</strong>
          </div>

          <button type="button">
            <FiXCircle size={18} />
          </button>
        </Toast>
      </Container>
    </>
  );
};

export default ToastContainer;
