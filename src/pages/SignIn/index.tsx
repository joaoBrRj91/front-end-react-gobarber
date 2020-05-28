// React imports
import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

// Assets imports
import logoImg from '../../assets/logo.svg';

// Components imports
import Input from '../../components/input';
import Button from '../../components/button';

// Styles Components imports
import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <>
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <form>
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
        </form>

        <a href="CreateAccount">
          <FiLogIn /> Criar conta
        </a>
      </Content>

      <Background />
    </Container>
  </>
);

export default SignIn;
