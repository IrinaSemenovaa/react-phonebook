import { logIn } from 'Redux/auth/auth-operations';
import { FormButton, FormContainer, FormInput, FormLabel } from 'components/RegisterForm/RegisterFormStyles';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function LoginForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = e => {
     const form = e.currentTarget;
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');

    form.reset();
  };

  return (
    <FormContainer onSubmit={handleSubmit} autoComplete="off">
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
      <FormButton type="submit">Log In</FormButton>
    </FormContainer>
  );
}
