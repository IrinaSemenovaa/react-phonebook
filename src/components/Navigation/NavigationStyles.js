import styled from '@emotion/styled';

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  gap: 20px;

  li {
    a {
      text-decoration: none;
      color: #fff;
      font-weight: bold;
      padding: 10px;
      border-radius: 20px;
      transition: all 0.3s ease;

      &:hover {
        background-color: #f2f2f2;
        color: #333;
      }

      &.active {
        background-color: #333;
        color: #fff;
      }
    }
  }
`;
