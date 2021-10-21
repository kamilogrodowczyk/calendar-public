import { darken, lighten } from 'polished';

export const theme = {
  colors: {
    white: '#ffffff',
    lightGrey: '#d1d1d1',
    yellow: '#fdd425',
    darkenYellow: darken(0.1, '#fdd425'),
    black: '#222222',
    lightenBlack: lighten(0.15, '#222222'),
    disabled: lighten(0.25, '#222222'),
    error: '#ff3333',
  },

  fontSizes: {
    small: '.9rem',
    primary: '1rem',
    medium: '1.4rem',
    large: '1.8rem',
  },
};
