import styled from 'styled-components';

export const AchievementsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 40px;
    justify-content: center;
    align-items: center;
    margin: 40px 0;
    width: 100%;
  }
`;
