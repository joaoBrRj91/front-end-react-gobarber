// React imports
import React, { useRef, useCallback } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

// External components
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

// Assets imports
import logoImg from '../../assets/logo.svg';

// Components imports
import Input from '../../components/input';
import Button from '../../components/button';

// Styles Components imports
import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);

      const errors = getValidationErrors(error);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <>
      <Container>
        <Content>
          <img src={logoImg} alt="GoBarber" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu logon</h1>

            <Input
              icon={FiMail}
              name="email"
              type="text"
              placeholder="Informar o E-mail"
            />

            <Input
              icon={FiLock}
              name="password"
              type="password"
              placeholder="Informar a senha"
            />

            <Button type="submit">Entrar</Button>

            <a href="forgot">Esqueci minha senha</a>
          </Form>

          <a href="CreateAccount">
            <FiLogIn /> Criar conta
          </a>
        </Content>

        <Background />
      </Container>
    </>
  );
};

export default SignIn;
