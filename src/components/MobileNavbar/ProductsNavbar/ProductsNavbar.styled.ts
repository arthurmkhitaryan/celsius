import styled from 'styled-components';

export const SubMenu = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  width: 100%;
`;

export const SubMenuItem = styled.li`
  padding: 16px;
  border-bottom: 1px solid #f2f6fd;
  display: flex;
  justify-content: space-between;
  width: 100%;

  a {
    text-decoration: none;
    color: #1c1c1c;
    font-size: 16px;
    line-height: 18px;
    font-weight: 500;
  }
`;

export const SubMenuFirstItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    color: #0044cc;
  }
`;

export const SubMenuItems = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
`;

export const SubMenuSubItem = styled.a`
  padding: 16px 16px 16px 56px;
  font-size: 14px;
  color: #1c1c1c;
  font-weight: 400;
  border-bottom: 1px solid #f2f2f2;
  line-height: 18px;
  text-decoration: none;
`;

export const Chevron = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;

  transform: ${({ isOpen }) => (isOpen ? 'rotate(88deg)' : 'rotate(0deg)')};
`;
