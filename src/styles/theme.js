export const theme = {
  colors: {
    main: 'rgba(0, 0, 0, 1)',
    text: ' rgba(145, 151, 179, 1)',
    textLight: ' rgba(117, 117, 117, 1)',
    accent: 'rgba(131, 131, 131, 1)',
    bgMain: 'rgba(226, 236, 249, 0.5)',
    hover: 'rgba(255, 255, 255, 1)',
  },
  backgrounds: {
    main: 'rgba(250, 251, 255, 1)',
    active: 'rgba(89, 50, 234, 1)',
  },
  transition: {
    cubic: '500ms cubic-bezier(0.4, 0, 0.2, 1)',
  },

  shadows: {
    default: '2px 1px 2px 1px gray',
    xl: '4px 2px 3px 3px black',
  },
  media: {
    tablet: '568px',
    desktop: '1024px',
  },
  spacing: (value, coef = 4) => `${value * coef}px`,
};
export const darkTheme = {
  colors: {
    main: '#e2e2e4',
    fontColor: 'white',
    accent: 'teal',
    bgMain: 'yellow',
  },
  backgrounds: {
    main: 'black',
  },
  shadows: {
    default: '2px 1px 2px 1px gray',
    xl: '4px 2px 3px 3px black',
  },
  media: {
    tablet: '568px',
    desktop: '1024px',
  },
  spacing: (value, coef = 4) => `${value * coef}px`,
};
