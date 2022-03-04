import MaterialIcon from '@material/react-material-icon';
import React, { useState } from 'react';
import Button from '../Button';
import { Container } from './styles';

interface InputSearchProps {
  onSubmit?: (searchValue: string, clearField: () => void) => void;
  placeholder?: string;
}

const InputSearch: React.FC<InputSearchProps> = ({ onSubmit, placeholder }) => {
  const [search, setSearch] = useState<string>('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!onSubmit) return;

    onSubmit(search, () => setSearch(''));
  }

  return (
    <Container>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={placeholder ? placeholder : 'Digite para pesquisar...'}
          aria-label="pesquisar pelo id do funcionário"
        />
        <Button type='submit'>
          <MaterialIcon
            aria-label="botão para buscar funcionário por id"
            hasRipple
            icon='search'
            onClick={() => { }}
          />
        </Button>
      </form>
    </Container>
  );
}

export default InputSearch;