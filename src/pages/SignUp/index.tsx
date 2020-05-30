// React imports
import React, { useCallback } from 'react';

// External imports
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';

// Assets imports
import logoImg from '../../assets/logo.svg';

// Components imports
import Input from '../../components/input';
import Button from '../../components/button';

// Styles Components imports
import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'No mínimo 6 dígitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

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
