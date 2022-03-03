import React from 'react';
import { useParams } from "react-router-dom";
import Card from '../../components/elements/Card';
import FormEmployee from '../../components/FormEmployee';
import { EmployeeModel } from '../../models/employee';
import { Main } from './styles';


const Employee: React.FC = () => {
  const { employeeId } = useParams();

  function updateEmployee(data: EmployeeModel, resetFields: () => void) {
    console.log(data)

    // TODO: Call api

    resetFields();
  }

  return (
    <Main>
      <Card title='Atualizar Funcionário'>
        <FormEmployee onSubmit={updateEmployee} initialData={{
          id: 1,
          employee_name: 'Test',
          employee_salary: 1000,
          employee_age: 14
        }} />
      </Card>
    </Main>
  );
}

export default Employee;