import styled from "styled-components";
import {fadeIn} from "../styles/animations";

export const Title = styled.h2`
  text-transform: uppercase;
  padding: 16px 20px;
`

export const Form = styled.form`
  padding: 16px 20px;
  &[disabled]{
    opacity: .3;
  }
`

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;
  &[disabled]{
    opacity: .3;
  }
`
export const Error = styled.span`
  ${fadeIn()};
  font-size: 14px;
  color: red;
  text-align: center;
  align-items: center;
  padding: 8px 20px;
`
