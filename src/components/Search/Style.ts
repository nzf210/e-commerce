import { BoxProps, ButtonProps, InputGroupProps, InputProps } from '@chakra-ui/react';

export const inputGroup: InputGroupProps = {
  w: { base: '100%', lg: '32rem' },
  size: 'sm',
};

export const wrapperContainerStyles: BoxProps = {
  pos: 'relative',
  w: { base: '100%', lg: '32rem' },
}

export const searchStyle: InputProps = {
  type: 'text',
  placeholder: 'Search...',
  focusBorderColor: 'brand.primary.light',
  borderWidth: '1px',
  borderColor: 'gray.400',
}

export const dropDownStyle: BoxProps = {
  pos: 'absolute',
  bg: 'white',
  shadow: 'md',
  padding: '0.5rem',
  w: '100%',
  maxH: '500px',
  overflowY: 'auto',
  boxSizing: 'border-box',
  textColor: 'black'
}