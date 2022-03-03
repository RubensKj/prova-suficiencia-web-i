import {
  Headline6
} from '@material/react-typography';
import React from 'react';
import { Container, Content, Header } from './styles';


interface CardProps {
  title: string;
}

const Card: React.FC<CardProps> = ({ children, title }) => {
  return (
    <Container className='card'>
      <Header>
        <Headline6>{title}</Headline6>
      </Header>
      <Content>
        {children}
      </Content>
    </Container>
  );
}

export default Card;