import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'Redux/contacts/contacts-operations';
import {
  selectFilter,
  selectContacts,
} from 'Redux/contacts/contacts-selectors';
import {
  ButtonDelete,
  ContactsItem,
  ContactsList,
  ContactsListContainer,
  NameContainer,
  NameStyled,
  NumberContainer,
} from './ContactListStyles';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ContactsListContainer>
      <ContactsList>
        {filteredContacts.map(({ id, name, number }) => (
          <ContactsItem key={id}>
            <NameContainer>
              <NameStyled>{name}:</NameStyled>
            </NameContainer>
            <NumberContainer>
              <span>{number}</span>
            </NumberContainer>
            <ButtonDelete
              onClick={() => dispatch(deleteContact(id))}
              type="button"
            >
              Delete
            </ButtonDelete>
          </ContactsItem>
        ))}
      </ContactsList>
    </ContactsListContainer>
  );
}
