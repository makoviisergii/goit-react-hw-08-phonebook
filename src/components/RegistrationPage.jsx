import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/operations';
// import { fetchContacts } from '../redux/contacts/operations';
import styled from 'styled-components';

export const RegistrationPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    dispatch(register({ name, email, password }))
      .unwrap()
      .catch(error => alert('Incorrect password!'));
    form.reset();
  };
  return (
    <LoginBox>
      <h1>Registration</h1>
      <LoginForm onSubmit={handleSubmit}>
        <LoginLabel>
          Name
          <LoginInput name="name" type="text" placeholder="name" />
        </LoginLabel>
        Email
        <LoginInput name="email" type="text" placeholder="email" />
        <LoginLabel>
          <LoginLabel>
            Password
            <LoginInput
              name="password"
              type="password"
              placeholder="password"
            />
          </LoginLabel>
        </LoginLabel>
        <LoginButton>SignUP</LoginButton>
      </LoginForm>
    </LoginBox>
  );
};

const LoginBox = styled.div`
  padding: 30px;
`;

const LoginForm = styled.form`
  width: 400px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 1px solid black;
`;

const LoginInput = styled.input`
  height: 25px;
`;
const LoginButton = styled.button`
  display: block;
  width: 120px;
  border-radius: 3px;
  cursor: pointer;
  padding: 5px;
  box-shadow: 3px 5px 5px -2px rgba(6, 6, 6, 0.316);
  &:hover {
    box-shadow: 3px 5px 5px -2px rgba(94, 84, 182, 0.7);
  }
  &:focus {
    scale: 0.95;
  }
`;

const LoginLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
