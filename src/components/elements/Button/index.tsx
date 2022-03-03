import React from 'react';

import {default as ButtonMaterial} from '@material/react-button';

interface ButtonProps {
  type?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps & React.RefAttributes<HTMLButtonElement>> = ({ children, type, ...props }) => {
  return (
    <ButtonMaterial
      type={type ? type : 'button'}
      unelevated
      {...props}
    >
      {children}
    </ButtonMaterial>
  );
}

export default Button;