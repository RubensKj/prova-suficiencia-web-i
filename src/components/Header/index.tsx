import MaterialIcon from '@material/react-material-icon';
import TopAppBar, {
  TopAppBarFixedAdjust,
  TopAppBarIcon,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle
} from '@material/react-top-app-bar';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from './styles';

const Header: React.FC = () => {
  const navigate = useNavigate();

  function push(path: string) {
    navigate(path);
  }

  return (
    <Container>
      <TopAppBar>
        <TopAppBarRow>
          <TopAppBarSection align='start'>
            <TopAppBarTitle onClick={() => push('/')}>Funcionários</TopAppBarTitle>
          </TopAppBarSection>
          <TopAppBarSection align='end' role='toolbar'>
            <TopAppBarIcon actionItem tabIndex={0}>
              <MaterialIcon
                aria-label="create employee"
                hasRipple
                icon='add'
                onClick={() => push('/employee')}
              />
            </TopAppBarIcon>
          </TopAppBarSection>
        </TopAppBarRow>
      </TopAppBar>
      <TopAppBarFixedAdjust />
    </Container>
  );
}

export default Header;