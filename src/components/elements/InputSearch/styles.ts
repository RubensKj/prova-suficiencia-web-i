import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 8px;

  height: 42px;
  border: 1px solid #ecebed;
  border-radius: 8px;

  padding: 5px 0 5px 15px;

  overflow: hidden;

  form {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
  }

  input {
    width: 100%;

    border: transparent;
    background: transparent;

    padding-right: 15px;
  }

  button {
    background-color: #f8f8f8 !important;

    border-radius: 0px;

    height: 42px;

    border-left: 1px solid #ecebed;

    .mdc-button__label {
      display: flex;
      justify-content: center;
      align-items: center;

      color: #747474;
    }
  }
`;
