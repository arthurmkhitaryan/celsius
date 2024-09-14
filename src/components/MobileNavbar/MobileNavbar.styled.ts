import styled from 'styled-components';
import { typographyPreset1 } from '@/styles';

export const NavbarWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`;

export const Navbar = styled.nav`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const NavList = styled.ul`
    display: flex;
    flex-direction: column;
    list-style-type: none;
    width: 100%;
`;

export const NavListItem = styled.li`
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #F2F6FD;
    padding: 20px;

    a {
        font-family: Inter, sans-serif;
        ${typographyPreset1};
        text-decoration: none;
        text-transform: uppercase;
        color: #1C1C1C;
        font-size: 16px;
        line-height: 18px;
        font-weight: 600;
        display: block;
        width: 100%;
    }
        
    svg {
         color: #0044CC;
         //margin-right: 20px;
    }
`;
