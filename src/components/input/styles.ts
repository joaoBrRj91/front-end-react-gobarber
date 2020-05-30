import styled, { css } from 'styled-components';

interface ContainerProps {
  isfocused: boolean;
  isfilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 20px;
  border: 1px solid #232129;
  padding: 15px;
  width: 100%;
  color: #666360;
  display: flex;
  align-items: center;

  & + div {
    margin-top: 10px;
  }

  ${(props) =>
    props.isfocused &&
    css`
      color: #ff9000;
      border: 1px solid #ff9000;
    `}

  ${(props) =>
    props.isfilled &&
    css`
      color: #ff9000;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
