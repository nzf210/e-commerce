import { extendTheme } from '@chakra-ui/react';
import { buildLegacyTheme } from 'sanity';

export const colors = {
  brand: {
    primary: 'hsl(337,79%,60%)',
    primaryLight: 'hsl(337,79%,70%)',
    primaryDark: 'hsl(337,79%,50%)',
  },
};

export const theme = extendTheme({ colors });

const props = {
  '--ms-white': '#201f1f',
  '--ms-black': '#b7b0b0',
  '--brand-primary': colors.brand.primary,
  '--brand-primary-light': colors.brand.primaryLight,
  '--brand-primary-dark': colors.brand.primaryDark,
  '--ms-gray': '#666666',
};

export const msTheme = buildLegacyTheme({
  '--black': props['--ms-black'],
  '--gray': props['--ms-gray'],
  '--focus-color': props['--brand-primary-dark'],
  '--brand-primary': props['--brand-primary'],
  '--component-bg': props['--ms-white'],
  '--component-text-color': props['--ms-black'],
  '--default-button-color': props['--ms-gray'],
  '--default-button-primary-color': props['--brand-primary'],
  '--state-info-color': props['--brand-primary-light'],
});
