import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  .ant-table-content {
    border: 1px solid #ecebed;

    border-radius: 4px;

    overflow: auto;
  }

  .actions-th {
    width: 18%;
  }
`;

export const ActionsButtonWrapper = styled.div`
  display: flex;

  width: 100px;

  button {
    min-width: unset;
    width: fit-content;

    background-color: #f8f8f8 !important;
    border: 1px solid #ecebed;

    .mdc-button__label {
      display: flex;
      justify-content: center;
      align-items: center;

      color: #747474;
    }

    margin-right: 8px;

    transition: 0.2s transform;

    :hover {
      transform: translateY(-1px);
    }
  }
`;