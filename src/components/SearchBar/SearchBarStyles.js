import styled from '@emotion/styled';

export const SerchBarContainer = styled.div`
  display: grid;
  margin: 30px auto 0 auto;
`;

export const SearchInputStyles = styled.input`
  padding: 8px;
  margin: 0 auto;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 360px;
  height: 40px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;
