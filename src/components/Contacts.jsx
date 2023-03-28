import React from 'react';
import styled from 'styled-components';
import { ContactForm } from '../pages/ContactForm';
import { Filter } from '../pages/Filter';
import { ContactList } from '../pages/ContactList';

export const Contacts = () => {
  return (
    <PhonebookBox>
      <h1> Phonebook</h1>
      <ContactForm />
      <Filter />
      <ContactList />
    </PhonebookBox>
  );
};

const PhonebookBox = styled.div`
  padding: 30px;
`;
