import MaterialIcon from '@material/react-material-icon';
import { TopAppBarIcon } from '@material/react-top-app-bar';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EmployeeModel } from '../../models/employee';
import DeleteDialog from '../DeleteDialog';
import Table from '../elements/Table';
import { ActionsButtonWrapper, Container } from './styles';

const employeeTableColumns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Nome',
    dataIndex: 'employee_name',
    key: 'employee_name',
  },
  {
    title: 'Salário',
    dataIndex: 'employee_salary',
    key: 'employee_salary',
    render: (text) => (
      `R$ ${text}`
    ),
  },
  {
    title: 'Idade',
    dataIndex: 'employee_age',
    key: 'employee_age',
  },
  {
    title: 'Ações',
    key: 'action',
    render: (text, record: EmployeeModel) => <ActionsButton record={record} />,
  },
];

interface ActionsButtonProps {
  record: EmployeeModel;
}

const ActionsButton: React.FC<ActionsButtonProps> = ({ record }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  function openUpdatePage(id: number) {
    navigate(`/employee/${id}`);
  }

  function toggleDialog() {
    setIsOpen(!isOpen);
  }

  return (
    <React.Fragment>
      <DeleteDialog isOpen={isOpen} toggleIsOpen={toggleDialog} employee={record} />
      <ActionsButtonWrapper>
        <TopAppBarIcon actionItem tabIndex={0}>
          <MaterialIcon
            aria-label="editar funcionário"
            hasRipple
            icon='edit'
            onClick={() => openUpdatePage(record.id)}
          />
        </TopAppBarIcon>
        <TopAppBarIcon actionItem tabIndex={1}>
          <MaterialIcon
            aria-label="remover funcionário"
            hasRipple
            icon='delete'
            onClick={() => toggleDialog()}
          />
        </TopAppBarIcon>
      </ActionsButtonWrapper>
    </React.Fragment>
  );
}

interface TableEmployeesProps {
  rowKey?: string;
  data?: EmployeeModel[];
}

const TableEmployees: React.FC<TableEmployeesProps> = ({ rowKey, data }) => {
  return (
    <Container>
      <Table
        rowKey={rowKey}
        columns={employeeTableColumns}
        dataSource={data ? data : []}
      />
    </Container>
  );
}

export default TableEmployees;