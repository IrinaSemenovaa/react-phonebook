import { fetchContacts } from 'Redux/contacts/contacts-operations';
import { MainFormContainer } from 'components/AppStyles';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import SearchBar from 'components/SearchBar/SearchBar';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <MainFormContainer>
        <ContactForm />
        <SearchBar />
        <ContactList />
      </MainFormContainer>
    </div>
  );
}
