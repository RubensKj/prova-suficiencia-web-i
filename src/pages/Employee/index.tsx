import { notification } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import Card from '../../components/elements/Card';
import FormEmployee from '../../components/FormEmployee';
import { EmployeeModel } from '../../models/employee';
import api from '../../services/api';
import { getEmployees, updateEmployees } from '../../services/employeesLocal';
import { Main } from './styles';


const Employee: React.FC = () => {
  const [employee, setEmployee] = useState<EmployeeModel | null>();

  const { employeeId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const localEmployees = getEmployees();

    if (!localEmployees) return;

    const foundEmployee = localEmployees.find(employee => employee.id.toString() === employeeId);

    if (foundEmployee) {
      setEmployee(foundEmployee);
      return;
    }

    api.get(`/employee/${employeeId}`)
      .then(response => {
        setEmployee(response.data.data);
      }).catch(error => {
        notification['error']({
          message: 'Erro no sistema',
          description: 'Ocorreu um erro ao buscar informações do funcionário...'
        });
      });

  }, [employeeId]);

  function onSuccess() {
    navigate(`/`);

    notification['success']({
      message: 'Funcionário atualizado!',
      description: 'Funcionário foi atualizado com sucesso!'
    });
  }

  function handleUpdateEmployee(data: EmployeeModel) {
    let employeeWithChanges = {
      ...data,
      id: employee?.id ? employee?.id : -1
    }

    let update = updateEmployees(employeeWithChanges);

    if (update) {
      onSuccess();
      return;
    }

    api.put(`/update/${employee?.id}`, employeeWithChanges)
      .then(response => {
        if (!response.data.data) return;

        onSuccess();
      }).catch(error => {
        notification['error']({
          message: 'Erro no sistema',
          description: 'Ocorreu um erro durante comunicação com sistema...'
        });
      });
  }

  return (
    <Main>
      <Card title='Atualizar Funcionário'>
        <FormEmployee onSubmit={handleUpdateEmployee} initialData={employee ? employee : undefined} />
      </Card>
    </Main>
  );
}

export default Employee;