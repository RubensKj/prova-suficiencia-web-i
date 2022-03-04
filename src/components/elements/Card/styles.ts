import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;

  border-radius: 4px;
  border: 1px solid #ecebed;

  padding: 15px 18px;

  @media only screen and (max-width: 480px)  {
    border: none !important;
  }
`;

export const Header = styled.header`
  margin-bottom: 8px;
`;

export const Content = styled.div`
  margin-top: 8px;
  padding: 5px 8px;
`;