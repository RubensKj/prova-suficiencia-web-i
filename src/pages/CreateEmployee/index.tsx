import { notification } from 'antd';
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

  function onSuccess() {
    navigate(`/`);

    notification['success']({
      message: 'Funcionário salvo!',
      description: 'Funcionário foi salvo com sucesso!'
    });
  }

  function handleSaveEmployee(data: EmployeeModel) {
    let created = saveEmployee(data);

    if (created) {
      onSuccess();
      return;
    }

    api.post(`/create`, data)
      .then(response => {
        if (!response.data.data) return;

        onSuccess();
      }).catch(error => {
        notification['error']({
          message: 'Erro no sistema',
          description: 'Ocorreu um erro durante comunicação com o sistema...'
        });
      })
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