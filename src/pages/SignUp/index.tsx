// React imports
import React, { useCallback, useRef } from 'react';

// External imports
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import getValidationErrors from '../../utils/getValidationErrors';

// Assets imports
import logoImg from '../../assets/logo.svg';

// Components imports
import Input from '../../components/input';
import Button from '../../components/button';

// Styles Components imports
import { Container, Content, AnimationContainer, Background } from './styles';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

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
      // eslint-disable-next-line no-console
      console.log(error);

      const errors = getValidationErrors(error);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <>
      <Container>
        <Background />
        <Content>
          <AnimationContainer>
            <img src={logoImg} alt="GoBarber" />

            <Form ref={formRef} initialData={{}} onSubmit={handleSubmit}>
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

            <Link to="/">
              <FiArrowLeft /> Voltar para o logon
            </Link>
          </AnimationContainer>
        </Content>
      </Container>
    </>
  );
};

export default SignUp;
