// src/smooth-doc/theme.js
import { theme as baseTheme } from 'smooth-doc/src/theme'
import myTheme from 'prism-react-renderer/themes/dracula'


export const theme = {
  ...baseTheme,
  'prism-theme': myTheme,
  colors: {
    ...baseTheme.colors,
    'primary-100': '#FFFAF0',
    'primary-200': '#FEEBC8',
    'primary-300': '#FBD38D',
    'primary-400': '#F6AD55',
    'primary-500': '#B7410E',
    'primary-600': '#B7410E',
    'primary-700': '#B7410E',
    'primary-800': '#9C4221',
    'primary-900': '#7B341E',
    primary: '#B7410E', // primary-500
  },
}
