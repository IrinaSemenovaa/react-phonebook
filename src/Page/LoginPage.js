import { LogInContainer } from 'components/AppStyles';
import LoginForm from 'components/LoginForm/LoginForm';
import React from 'react';

export default function LoginPage() {
    return (
      <LogInContainer>
        <h2>Login</h2>
        <LoginForm />
      </LogInContainer>
    );
}