import React from 'react';
import { HomeContainer, HomeImageContainer, HomeText, MainTitle } from './HomePageStyles';
import mainImg from '../image/Future_Fund-2021-Website_Assets_Directory_Communication.png'

export default function HomePage() {
  return (
    <HomeContainer>
      <MainTitle>Welcome to Phonebook!</MainTitle>
      <HomeText>
        Discover the ultimate solution for contact management with Phonebook.
        Streamline your communication and stay organized with ease. Whether you
        need to keep track of personal contacts or manage a professional
        network, Phonebook is your go-to tool.
      </HomeText>
      <HomeImageContainer>
        <img src={mainImg} alt="img" width="550px" />
      </HomeImageContainer>
    </HomeContainer>
  );
}
