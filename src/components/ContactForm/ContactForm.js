import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, useFormik } from 'formik';
import { nanoid } from 'nanoid';
import { addContact } from 'Redux/contacts/contacts-operations';
import { selectContacts } from 'Redux/contacts/contacts-selectors';
import { ButtonAdd, LabelStyles} from './ContactFormStyles';
import css from './ContactForm.module.css';

export default function ContactForm({ inputStyles, formContainer }) {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    onSubmit: (values, { resetForm }) => {
      const { name, number } = values;

      const isDuplicate = contacts.some(
        contact => contact.name === name || contact.number === number
      );

      if (isDuplicate) {
        return alert('Duplicate contact');
      }

      dispatch(addContact({ name, number }));
      resetForm();
    },
  });

  return (
    <div>
      <h1>Phonebook</h1>
      <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={formik.handleSubmit}
      >
        <Form className={css.formContainer}>
          <LabelStyles htmlFor={nameInputId}>
            Name
            <Field
              id={nameInputId}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={formik.handleChange}
              value={formik.values.name}
              placeholder="e.g. John Doe"
              className={css.inputStyles}
            />
          </LabelStyles>
          <LabelStyles htmlFor={numberInputId}>
            Number
            <Field
              id={numberInputId}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={formik.handleChange}
              value={formik.values.number}
              placeholder="e.g. +123456789"
              className={css.inputStyles}
            />
          </LabelStyles>
          <ButtonAdd type="submit">Add contact</ButtonAdd>
        </Form>
      </Formik>
    </div>
  );
}
