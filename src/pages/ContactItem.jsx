import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeContact } from '../redux/contacts/operations';

export const ContactItem = ({ contact }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(removeContact(id));
  }

  return (
    <ContactItemBox>
      <h5>
        ✶ {name} : {number}
      </h5>
      <ContactButton onClick={handleDelete} type="button">
        Delete
      </ContactButton>
    </ContactItemBox>
  );
};

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }).isRequired
  ),
};

const ContactItemBox = styled.li`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 15px;
`;
const ContactButton = styled.button`
  display: block;
  height: 30px;
  width: 80px;
  padding: 5px;
  border-radius: 3px;
  cursor: pointer;
  box-shadow: 3px 5px 5px -2px rgba(6, 6, 6, 0.316);
  &:hover {
    box-shadow: 3px 5px 5px -2px rgba(94, 84, 182, 0.7);
  }
  &:focus {
    scale: 0.95;
  }
`;
