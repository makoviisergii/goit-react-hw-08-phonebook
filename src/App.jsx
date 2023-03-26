import styled from 'styled-components';
import { ContactForm } from './components/ContactForm';
import { Filter } from './components/Filter';
import { ContactList } from './components/ContactList';

export const App = () => {
  return (
    <PhonebookBox>
      <h1> Phonebook</h1>
      <ContactForm />
      <h2> Contacts</h2>
      <Filter />
      <ContactList />
    </PhonebookBox>
  );
};

const PhonebookBox = styled.div`
  padding: 30px;
`;
