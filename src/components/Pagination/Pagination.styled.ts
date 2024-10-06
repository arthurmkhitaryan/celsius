import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
`;

export const PageLink = styled.a<{ active?: boolean, disabled?: boolean }>`
  &:first-child {
    color: #969696;
  }

  color: ${props => (props.active ? '#0044CC' : '#282828')};
  margin: 0 8px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Ellipsis = styled.span`
  margin: 0 8px;
`;
