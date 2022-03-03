import React from 'react';

import {default as ButtonMaterial} from '@material/react-button';

interface ButtonProps {
  onClick?: () => void;
}

const Button: React.FC<ButtonProps & React.RefAttributes<HTMLButtonElement>> = ({ children, ...props }) => {
  return (
    <ButtonMaterial
      {...props}
    >
      {children}
    </ButtonMaterial>
  );
}

export default Button;