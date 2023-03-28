import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { selectIsLoggedIn, selectUser } from '../redux/auth/selectors';
import { logOut } from 'redux/auth/operations';

export const Navigation = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedin = useSelector(selectIsLoggedIn);

  return (
    <HederBox>
      {!isLoggedin ? (
        <StyledRegister>
          <NavLink to="/register">Registration</NavLink>
          <NavLink to="/login">Login</NavLink>
        </StyledRegister>
      ) : (
        <div>
          <StyledText>
            <p>
              Welcome, <span>{user.name}</span> !
            </p>
            <StyledEmail>{user.email}</StyledEmail>
            <LoginButton onClick={() => dispatch(logOut())}>Logout</LoginButton>
          </StyledText>
        </div>
      )}
    </HederBox>
  );
};
const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledRegister = styled.div`
  display: flex;
  gap: 50px;
`;

const HederBox = styled.header`
  background-color: #f3f9f9;
  width: 460px;
  justify-content: center;
  gap: 20px;
  font-size: 32px;
  font-weight: 700;
  color: black;
  padding: 20px;
  display: flex;
  box-shadow: 0px 3px 8px -1px rgba(0, 0, 0, 0.75);
  a {
    text-decoration: none;
  }
`;

const StyledEmail = styled.p`
  font-size: 24px;
  font-weight: 500;
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
