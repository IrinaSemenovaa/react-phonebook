import { LogInContainer } from 'components/AppStyles';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import React from 'react';

export default function RegisterPage() {
  return (
    <LogInContainer>
      <h2>Register</h2>
      <RegisterForm />
    </LogInContainer>
  );
}
