import {
  Subtitle1
} from '@material/react-typography';
import { notification } from 'antd';
import React from 'react';
import { EmployeeModel } from '../../models/employee';
import api from '../../services/api';
import { deleteEmployee } from '../../services/employeesLocal';
import Dialog from '../elements/Dialog';

interface DeleteDialogProps {
  isOpen: boolean;
  toggleIsOpen: () => void;
  employee: EmployeeModel;
}

const DeleteDialog: React.FC<DeleteDialogProps> = ({ isOpen, toggleIsOpen, employee }) => {
  function reloadPageAfterDelete() {
    window.location.reload();
  }

  function handleDelete() {
    let deleted = deleteEmployee(employee.id);

    if (deleted) {
      reloadPageAfterDelete();
      return;
    }

    api.delete(`/delete/${employee.id}`)
      .then(response => {
        if (!response) return;

        reloadPageAfterDelete();
      }).catch(error => {
        notification['error']({
          message: 'Erro no sistema',
          description: 'Ocorreu um erro ao deletar o funcionário...'
        });
      });
  }

  return (
    <Dialog
      isOpen={isOpen}
      toggleIsOpen={toggleIsOpen}
      title={`Deletar funcionário ${employee.employee_name}?`}
      onAccept={handleDelete}
      onAcceptText='Deletar'
    >
      <Subtitle1>Você realmente deseja excluir o funcionário <strong>{employee.employee_name}</strong>? Isso não poderá ser desfeito...</Subtitle1>
    </Dialog>
  );
}

export default DeleteDialog;