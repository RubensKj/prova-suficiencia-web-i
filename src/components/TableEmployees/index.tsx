import MaterialIcon from '@material/react-material-icon';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EmployeeModel } from '../../models/employee';
import DeleteDialog from '../DeleteDialog';
import Button from '../elements/Button';
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
    render: (text) => <strong>{text}</strong>,
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
    className: 'actions-th',
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
        <Button onClick={() => openUpdatePage(record.id)}>
          <MaterialIcon
            aria-label="editar funcionário"
            icon='edit'
          />
        </Button>
        <Button onClick={() => toggleDialog()}>
          <MaterialIcon
            aria-label="remover funcionário"
            icon='delete'
          />
        </Button>
      </ActionsButtonWrapper>
    </React.Fragment>
  );
}

interface TableEmployeesProps {
  rowKey?: string;
  data?: EmployeeModel[];
  isLoading?: boolean;
}

const TableEmployees: React.FC<TableEmployeesProps> = ({ rowKey, data, isLoading }) => {
  return (
    <Container>
      <Table
        rowKey={rowKey}
        columns={employeeTableColumns}
        dataSource={data ? data : []}
        loading={isLoading}
      />
    </Container>
  );
}

export default TableEmployees;