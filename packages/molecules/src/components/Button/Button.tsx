import React from 'react'

import { IButton, StyledButton } from './StyledButton'

export const Button: React.FC<IButton> = ({ color, variant, children }) => (
  <StyledButton variant={variant} color={color}>
    {children}
  </StyledButton>
)
