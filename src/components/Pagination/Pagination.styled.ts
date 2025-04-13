import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
`;

export const PageLink = styled.a<{ active?: boolean; disabled?: boolean }>`
    color: ${(props) => {
        if (props.disabled) return '#ccc';
        return props.active ? '#0044CC' : '#282828';
    }};

    margin: 0 8px;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    text-decoration: none;
    pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};

    &:hover {
        text-decoration: ${(props) => (props.disabled ? 'none' : 'underline')};
    }
`;

export const Ellipsis = styled.span`
  margin: 0 8px;
`;
