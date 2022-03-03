import MaterialIcon from '@material/react-material-icon';
import TextField, { HelperText, Input as InputMaterial } from '@material/react-text-field';
import React, { useEffect, useState } from 'react';

interface InputProps {
  type?: string;
  label: string;
  value?: string;
  onChange?: (text: string) => void;
  clearField?: () => void;
  required?: boolean;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, value, onChange, clearField, required, type }) => {
  const [currentValue, setCurrentValue] = useState<string>(value ? value : '');

  useEffect(() => {
    setCurrentValue(value ? value : '')
  }, [value]);

  function handleOnChange(text: string) {
    setCurrentValue(text);

    if (!onChange) return;

    onChange(text);
  }

  return (
    <TextField
      label={label}
      helperText={<HelperText showToScreenReader={true} validation>{!!currentValue ? '' : 'Campo precisa ser preenchido'}</HelperText>}
      onTrailingIconSelect={() => clearField ? clearField() : ''}
      trailingIcon={<MaterialIcon role="button" icon="clear" />}
    >
      <InputMaterial
        type={type ? type : 'text'}
        value={currentValue}
        required={required}
        onChange={(e: React.FormEvent<HTMLInputElement>) => handleOnChange(e.currentTarget.value)} />
    </TextField>
  );
}

export default Input;