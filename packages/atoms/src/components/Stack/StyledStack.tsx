import Stack, { StackProps } from '@mui/material/Stack'
import { styled } from '@mui/system'
import React from 'react'

export interface IStack extends StackProps {
  direcion?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  spacing?: 0 | 1 | 2 | 3 | 4 | 5
  justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline'
}

const MUIStack = styled(Stack)<IStack>`
  margin: 1;
`
export const StyledStack: React.FC<IStack> = ({ direction, spacing, justifyContent, alignItems, children }) => (
  <MUIStack direction={direction} spacing={spacing} justifyContent={justifyContent} alignItems={alignItems}>
    {children}
  </MUIStack>
)
