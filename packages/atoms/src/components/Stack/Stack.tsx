import React from 'react'

import { IStack, StyledStack } from './StyledStack'

export const Stack: React.FC<IStack> = ({ direction, spacing, justifyContent, alignItems, children }) => (
  <StyledStack direction={direction} spacing={spacing} justifyContent={justifyContent} alignItems={alignItems}>
    {children}
  </StyledStack>
)
