import React from 'react'

import { StyledButton } from './StyledButton'

export interface IButton {
  text: string
}

export const Button: React.FC<IButton> = ({ text }) => <StyledButton>{text}</StyledButton>
