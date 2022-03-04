import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/elements/Card';
import FormEmployee from '../../components/FormEmployee';
import { EmployeeModel } from '../../models/employee';
import api from '../../services/api';
import { saveEmployee } from '../../services/employeesLocal';
import { Main } from './styles';

const CreateEmployee: React.FC = () => {
  const navigate = useNavigate();

  function handleSaveEmployee(data: EmployeeModel) {
    let created = saveEmployee(data);

    if (created) {
      pushToMainPage();
      return;
    }

    api.post(`/create`, data)
      .then(response => {
        if (!response.data.data) return;

        pushToMainPage();
      }).catch(error => {
        console.log(error)
      })
  }

  function pushToMainPage() {
    navigate(`/`);
  }

  return (
    <Main>
      <Card title='Cadastrar Funcionário'>
        <FormEmployee onSubmit={handleSaveEmployee} />
      </Card>
    </Main>
  );
}

export default CreateEmployee;