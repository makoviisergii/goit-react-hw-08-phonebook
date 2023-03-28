import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../redux/contacts/slice';
import { getFilter } from '../redux/contacts/selectors';

export const Filter = () => {
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  return (
    <div>
      <ContactLabel>
        Find contacts by name
        <Contactinput
          type="text"
          placeholder="Type to search ..."
          value={filter}
          onChange={event => dispatch(changeFilter(event.target.value))}
        />
      </ContactLabel>
    </div>
  );
};

const ContactLabel = styled.label`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Contactinput = styled.input`
  height: 25px;
  width: 400px;
`;
