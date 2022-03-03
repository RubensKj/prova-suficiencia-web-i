import React from 'react';
import Card from '../../components/elements/Card';
import FormEmployee from '../../components/FormEmployee';
import { EmployeeModel } from '../../models/employee';
import { Main } from './styles';

const CreateEmployee: React.FC = () => {

  function saveEmployee(data: EmployeeModel, resetFields: () => void) {
    console.log(data)

    // TODO: Call api

    resetFields();
  }

  return (
    <Main>
      <Card title='Cadastrar Funcionário'>
        <FormEmployee onSubmit={saveEmployee} />
      </Card>
    </Main>
  );
}

export default CreateEmployee;