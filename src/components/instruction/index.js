import React from 'react';

import Typography from '@mui/material/Typography';

import { PaperStyled } from './styles';

function Instruction({ children }) {
  return (
    <PaperStyled variant="outlined">
      <Typography variant="body1">{children}</Typography>
    </PaperStyled>
  );
}

export default Instruction;
