import {
  Headline4
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

  const navigate = useNavigate();

  function pushToCreatePage() {
    navigate(`/employee`);
  }

  function onSearch(searchValue: string) {
    const localEmployee = getEmployees();

    if (!searchValue) {
      setEmployees(localEmployee);
      return;
    }

    if (localEmployee.length === 0) {
      api.get(`/employee/${searchValue}`)
        .then(response => {
          let foundEmployee = response.data.data;

          setEmployees(foundEmployee ? [foundEmployee] : []);
        }).catch(error => {
          removeEmployees();
        });
    }

    const foundEmployee = localEmployee.find(employee => employee.id.toString() === searchValue);

    setEmployees(foundEmployee ? [foundEmployee] : []);
  }

  useEffect(() => {
    const localEmployees = getEmployees();
    if (localEmployees.length > 0) return;

    api.get(`/employees`)
      .then(response => {
        setEmployees(response.data.data);
        saveEmployees(response.data.data);
      }).catch(error => {
        removeEmployees();
        console.log(error);
      });

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
        <TableEmployees
          rowKey='id'
          data={employees}
        />
      </Content>
    </Container>
  );
}

export default Main;