import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const MainForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px;
  border-radius: 10px;
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
`;

export const Input = styled(Field)`
  margin-left: 40px;
  font-size: 16px;

  background: #d7d1c9;
`;

export const Button = styled.button`
  transition: background-color 0.5s ease;
  outline: none;
  border: none;
  height: 25px;
  background-color: #5d534b8a;

  &:hover {
    background-color: #715b4b;
  }
`;
