import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    blue: {
      50: '#e6f0f7',
      100: '#c2d9e8',
      200: '#9dc1d9',
      300: '#78a9ca',
      400: '#4f8eb8',
      500: '#005293',
      600: '#00477f',
      700: '#003b6b',
      800: '#003057',
      900: '#002542',
    },
    coreTheme: {
      50: '#e6f2ff',
      100: '#bfdeff',
      200: '#99caff',
      300: '#73b5ff',
      400: '#4299e1',
      500: '#3182ce',
      600: '#005293',
      700: '#2c5282',
      800: '#2a4365',
      900: '#1A365D',
    },
  },
});

export default theme;