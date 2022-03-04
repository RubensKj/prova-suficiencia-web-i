import MaterialIcon from '@material/react-material-icon';
import {
  Headline4,
  Body1
} from '@material/react-typography';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/elements/Button';
import InputSearch from '../../components/elements/InputSearch';
import TableEmployees from '../../components/TableEmployees';
import { EmployeeModel } from '../../models/employee';
import api from '../../services/api';
import { getEmployees, removeEmployees, saveEmployees } from '../../services/employeesLocal';
import { Container, Content } from './styles';

const Main: React.FC = () => {
  const [employees, setEmployees] = useState<EmployeeModel[]>(getEmployees());
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  function pushToCreatePage() {
    navigate(`/employee`);
  }

  function onSearch(searchValue: string) {
    const localEmployee = getEmployees();

    if (!searchValue) {
      setEmployees(localEmployee);

      if (localEmployee.length === 0) {
        getEmployeesFromAPI();
      }

      setIsLoading(false);
      return;
    }

    if (localEmployee.length === 0) {
      setIsLoading(true);

      api.get(`/employee/${searchValue}`)
        .then(response => {
          let foundEmployee = response.data.data;

          setEmployees(foundEmployee ? [foundEmployee] : []);
          setError(null);
        }).catch(error => {
          removeEmployees();
          setError('Sistema está com alguma instabilidades, aguarde um momento para pesquisar e tente novamente.')
        }).finally(() => {
          setIsLoading(false);
        });
    }

    const foundEmployee = localEmployee.find(employee => employee.id.toString() === searchValue);

    setEmployees(foundEmployee ? [foundEmployee] : []);
  }

  function getEmployeesFromAPI() {
    api.get(`/employees`)
      .then(response => {
        setEmployees(response.data.data);
        saveEmployees(response.data.data);
        setError(null);
      }).catch(error => {
        removeEmployees();
        setError('Sistema está com alguma instabilidades, aguarde um momento e tente novamente.')
      }).finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    const localEmployees = getEmployees();

    if (localEmployees.length > 0) {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);

    getEmployeesFromAPI();
  }, []);

  return (
    <Container>
      <Headline4>Funcionários</Headline4>
      <Content>
        <div className='top-table-actions'>
          <div className='input-search-area'>
            <InputSearch onSubmit={onSearch} placeholder="Pesquise por um id..." />
          </div>
          <Button onClick={pushToCreatePage}>Novo Funcionário</Button>
        </div>
        {!error ? (
          <TableEmployees
            rowKey='id'
            data={employees}
            isLoading={isLoading}
          />
        ) : (
          <div className='error-area'>
            <MaterialIcon
              aria-label="erro no sistema"
              icon='error_outline'
            />
            <Body1>{error}</Body1>
          </div>
        )}
      </Content>
    </Container>
  );
}

export default Main;