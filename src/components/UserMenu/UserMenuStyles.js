import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";

export const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid white;
  padding: 7px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.5);
`;

export const WelcomeText = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: bold;
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

export const LogoutButton = styled.button`
  background: linear-gradient(-45deg, #ff00cc, #7f00ff);
  background-size: 200% 200%;
  animation: ${gradientAnimation} 5s ease infinite;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 5px 10px;
  cursor: pointer;
`;