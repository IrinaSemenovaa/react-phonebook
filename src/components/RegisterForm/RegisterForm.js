import { registerUser } from 'Redux/auth/auth-operations';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FormButton, FormContainer, FormInput, FormLabel } from './RegisterFormStyles';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = e => {
    setName(e.target.value);
    console.log(e.target.value);
  };
  const handleEmailChange = e => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = e => {
    setPassword(e.target.value);
   
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(registerUser({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');

    form.reset();
  };

  return (
    <FormContainer onSubmit={handleSubmit} autoComplete="off">
      <FormLabel>
        Username
        <FormInput type="text" name="name" onChange={handleNameChange} />
      </FormLabel>
      <FormLabel>
        Email
        <FormInput type="email" name="email" onChange={handleEmailChange} />
      </FormLabel>
      <FormLabel>
        Password
        <FormInput
          type="password"
          name="password"
          onChange={handlePasswordChange}
        />
      </FormLabel>
      <FormButton type="submit">Register</FormButton>
    </FormContainer>
  );
};
