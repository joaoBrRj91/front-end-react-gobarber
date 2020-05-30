// React imports
import React from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';

// Assets imports
import logoImg from '../../assets/logo.svg';

// Components imports
import Input from '../../components/input';
import Button from '../../components/button';

// Styles Components imports
import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  function handleSubmit(data: object): void {
    // eslint-disable-next-line no-console
    console.log(data);
  }

  return (
    <>
      <Container>
        <Background />
        <Content>
          <img src={logoImg} alt="GoBarber" />

          <Form initialData={{}} onSubmit={handleSubmit}>
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
          </Form>

          <a href="CreateAccount">
            <FiArrowLeft /> Voltar para o logon
          </a>
        </Content>
      </Container>
    </>
  );
};

export default SignUp;
