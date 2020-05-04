import styled from 'styled-components';

type ButtonProps = {
  color?: string;
  big?: string;
};

const Button = styled.button<ButtonProps>`
  background-color: #5199ff;
  color: white;
`;

export default Button;
