import React, { useEffect, useState } from 'react';
import { EmployeeModel } from '../../models/employee';
import Button from '../elements/Button';
import Input from '../elements/Input';
import { Container } from './styles';

interface FormEmployeeProps {
  initialData?: EmployeeModel;
  onSubmit?: (data: EmployeeModel, resetFields: () => void) => void;
}

const FormEmployee: React.FC<FormEmployeeProps> = ({ onSubmit, initialData }) => {
  const [employeeName, setEmployeeName] = useState<string>('');
  const [employeeSalary, setEmployeeSalary] = useState<string>('');
  const [employeeAge, setEmployeeAge] = useState<string>('');

  useEffect(() => {
    setEmployeeName(initialData?.employee_name ? initialData?.employee_name : '');
    setEmployeeSalary(initialData?.employee_salary ? initialData.employee_salary.toString() : '');
    setEmployeeAge(initialData?.employee_age ? initialData.employee_age.toString() : '');
  }, [initialData]);

  function resetFields() {
    setEmployeeName('');
    setEmployeeSalary('');
    setEmployeeAge('');
  }

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    let salaryParsed = parseFloat(employeeSalary);
    let ageParsed = parseInt(employeeAge);

    let employee = {
      employee_name: employeeName,
      employee_salary: salaryParsed,
      employee_age: ageParsed
    } as EmployeeModel;

    if (!onSubmit) return;

    onSubmit(employee, resetFields);
  }

  return (
    <Container>
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <Input label='Nome' value={employeeName} onChange={(text) => setEmployeeName(text)} clearField={() => setEmployeeName('')} required />
        <Input label='Salário' type='number' value={employeeSalary} onChange={(text) => setEmployeeSalary(text)} clearField={() => setEmployeeSalary('')} required />
        <Input label='Idade' type='number' value={employeeAge} onChange={(text) => setEmployeeAge(text)} clearField={() => setEmployeeAge('')} required />
        <Button type='submit'>Salvar</Button>
      </form>
    </Container>
  );
}

export default FormEmployee;