import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../redux/contacts/operations';
import { getContacts } from '../redux/contacts/selectors';

export const ContactForm = () => {
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const handleUserCreate = evt => {
    evt.preventDefault();
    const { name, number } = evt.target.elements;

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.value.toLowerCase()
      ) === undefined
    ) {
      dispatch(
        addContact({
          name: name.value,
          number: number.value,
        })
      );
      evt.target.reset();
    } else {
      alert(`${name.value} is already in contacts!`);
      evt.target.reset();
    }
  };

  return (
    <ContactFormBox onSubmit={handleUserCreate}>
      <ContactLabel>
        Name
        <Contactinput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я
          ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters,
          apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles
          de Batz de Castelmore d'Artagnan"
          required
        />
      </ContactLabel>
      <ContactLabel>
        Number
        <Contactinput
          type="tel"
          name="number"
          pattern="\+?\d{(1, 4)}?[-.\s]?\(?\d{(1, 3)}
          ?\)?[-.\s]?\d{(1, 4)}[-.\s]?\d{(1, 4)}[-.\s]?\d{(1, 9)}"
          title="Phone
          number must be digits and can contain spaces, dashes, parentheses and
          can start with +"
          required
        />
      </ContactLabel>
      <ContactButton>Add contact</ContactButton>
    </ContactFormBox>
  );
};

const ContactFormBox = styled.form`
  width: 400px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 1px solid black;
`;

const ContactLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Contactinput = styled.input`
  height: 25px;
`;

const ContactButton = styled.button`
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
