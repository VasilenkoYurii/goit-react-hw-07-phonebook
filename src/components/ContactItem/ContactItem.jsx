import { useDispatch, useSelector } from 'react-redux';
import { getVisibleContacts } from 'helperFunctions/helperFunctions';
import { getContacts } from 'redux/selectors';
import { getFiltedContacts } from 'redux/filterSlice/filterSlice';
import { deleteContact } from 'redux/operetions';
import { Button, Item, NameContainer, NamePrg } from './ContactItem.styled';

const ContactItem = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const filter = useSelector(getFiltedContacts);

  return getVisibleContacts(contacts, filter).map(({ id, name, phone }) => {
    return (
      <Item key={id}>
        <NameContainer>
          <NamePrg>{name}:</NamePrg>
          <p>{phone}</p>
        </NameContainer>
        <Button
          type="button"
          onClick={() => {
            dispatch(deleteContact(id));
          }}
        >
          Delete
        </Button>
      </Item>
    );
  });
};

export default ContactItem;
