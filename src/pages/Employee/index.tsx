import React from 'react';
import { useParams } from "react-router-dom";

import { Container } from './styles';

const Employee: React.FC = () => {
  const { employeeId } = useParams();

  return (
    <Container>
      <p>Show employee info</p>
      <p>{employeeId}</p>
    </Container>
  );
}

export default Employee;