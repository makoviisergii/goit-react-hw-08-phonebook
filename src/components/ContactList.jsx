import { ContactItem } from 'components/ContactItem';
import { ColorRing } from 'react-loader-spinner';
import styled from 'styled-components';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/operations';
import {
  getContacts,
  getFilter,
  getError,
  getIsLoading,
} from '../redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return (
      <Preloader>
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#e15b64', '#ff3300', '#f8b26a', '#b3ff00', '#849b87']}
        />
        <h1>Loading....</h1>
      </Preloader>
    );
  }
  if (error && !isLoading) {
    return (
      <>
        <h1>Something wrong!</h1>
        <h2>{error}</h2>
      </>
    );
  }

  return (
    <ul>
      {filter
        ? contacts
            .filter(contact => contact.name.toLowerCase().includes(filter))
            .map(contact => <ContactItem key={contact.id} contact={contact} />)
        : contacts.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
    </ul>
  );
};
const Preloader = styled.div`
  padding-left: 180px;
  height: 90vh;
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
`;
