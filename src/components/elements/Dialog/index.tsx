import {
  default as DialogMaterial, DialogButton, DialogContent,
  DialogFooter, DialogTitle
} from '@material/react-dialog';
import React from 'react';

interface DialogProps {
  isOpen: boolean;
  title: string;
  onAcceptText: string;
  onAccept: () => void;
  toggleIsOpen: () => void;
}

const Dialog: React.FC<DialogProps> = ({ isOpen, title, onAccept, onAcceptText, toggleIsOpen, children }) => {
  return (
    <DialogMaterial open={isOpen} onClose={() => toggleIsOpen()}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {children}
      </DialogContent>
      <DialogFooter>
        <DialogButton action='dismiss'>Cancelar</DialogButton>
        <DialogButton action='accept' onClick={onAccept} isDefault>{onAcceptText}</DialogButton>
      </DialogFooter>
    </DialogMaterial>
  );
}

export default Dialog;