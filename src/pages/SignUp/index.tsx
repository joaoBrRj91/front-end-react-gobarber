// React imports
import React from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';

// Assets imports
import logoImg from '../../assets/logo.svg';

// Components imports
import Input from '../../components/input';
import Button from '../../components/button';

// Styles Components imports
import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => (
  <>
    <Container>
      <Background />

      <Content>
        <img src={logoImg} alt="GoBarber" />

        <form>
          <h1>Faça seu cadastro</h1>

          <Input
            icon={FiUser}
            name="name"
            type="text"
            placeholder="Informe o nome"
          />

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

          <Button type="submit">Cadastrar</Button>
        </form>

        <a href="CreateAccount">
          <FiArrowLeft /> Voltar para o logon
        </a>
      </Content>
    </Container>
  </>
);

export default SignUp;
