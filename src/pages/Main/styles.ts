import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 1320px;
  width: 100%;
  height: 100%;

  margin: 0 auto;

  margin-top: 38px;
`;

export const Content = styled.main`
  width: 100%;

  padding: 5px 15px;

  .input-search-area {
    max-width: 465px;
    width: 100%;
  }

  .top-table-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 18px;

    
    @media only screen and (max-width: 720px)  {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;