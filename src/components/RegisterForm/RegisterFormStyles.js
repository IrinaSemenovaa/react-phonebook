import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
  
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 10px;
`;

export const FormInput = styled.input`
  padding: 10px;
  margin-top: 8px;
  width: 100%;
  border-radius: 6px;
  border: none;

  &:hover,
  &:focus {
    outline: none;
  }
`;

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const FormButton = styled.button`
  background: linear-gradient(-45deg, #32cd32, #228b22);
  background-size: 200% 200%;
  animation: ${gradientAnimation} 2s linear infinite;
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  width: 120px;
  margin: 0 auto;
  margin-top: 15px;
  border-radius: 6px;
  font-weight: 600;

  &:hover {
    background: #32cd32;
  }
`;