import Button, { ButtonProps } from '@mui/material/Button'
import { styled } from '@mui/system'
import React from 'react'

interface IButton extends ButtonProps {
  format?: 'primary' | 'secondary'
  variant?: 'contained' | 'outlined' | 'text'
}

const MUIButton = styled(Button)<IButton>`
  border: 2;
  border-radius: 2;
  height: 72px;
`

export const StyledButton: React.FC<IButton> = ({ format, variant, children }) => (
  <Button color={format} variant={variant}>
    {children}
  </Button>
)
