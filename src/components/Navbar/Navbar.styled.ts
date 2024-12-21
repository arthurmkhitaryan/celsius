import styled from 'styled-components';
import { typographyPreset1 } from '@/styles';

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.common.bgSecondary};
  height: 50px;
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 17px;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  gap: 66px;

  .category-list {
    margin-bottom: -3px;
  }
`;

export const NavListItem = styled.li`
  a {
    font-family: Inter, sans-serif;
    ${typographyPreset1};
    text-decoration: none;
    text-transform: uppercase;
    color: ${({ theme }) => theme.palette.common.graySecondary};
  }
`;
