import styled from 'styled-components';
import { shade } from 'polished';

import signUpBackgroundImg from '../../assets/sign-up-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch
    /*stretch to fill the container (still respect min-width/max-width)*/;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* content: center; Substitui justify-content align-items se ambos
  tiverem o mesmo valor */
  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    color: #ff9000;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`;

export const Background = styled.div`
  flex: 1; /*Faz o elemento ocupar todo o espaço disponivel na tela - 'Flexivel' */
  background: url(${signUpBackgroundImg}) no-repeat center;
  background-size: cover;
`;
