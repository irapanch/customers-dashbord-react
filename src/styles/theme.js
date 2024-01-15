export const theme = {
  colors: {
    main: 'rgba(0, 0, 0, 1)',
    text: ' rgba(145, 151, 179, 1)',
    tableText: 'rgba(41, 45, 50, 1)',
    textLight: ' rgba(117, 117, 117, 1)',
    accent: 'rgba(131, 131, 131, 1)',
    bgMain: 'rgba(226, 236, 249, 0.5)',
    hover: 'rgba(255, 255, 255, 1)',
    active: 'rgba(22, 192, 152, 1)',
    input: 'rgba(181, 183, 192, 1)',
    paginate: 'rgba(64, 75, 82, 1)',

    textActive: 'rgba(0, 135, 103, 1)',

    textInactive: 'rgba(223, 4, 4, 1)',
  },
  backgrounds: {
    main: 'rgba(250, 251, 255, 1)',
    active: 'rgba(89, 50, 234, 1)',
    input: 'rgba(249, 251, 255, 1)',
    statusActive: 'rgba(22, 192, 152, 0.38)',
    statusInactive: 'rgba(255, 197, 197, 1)',
    paginate: 'rgba(238, 238, 238, 1)',
  },
  transition: {
    cubic: '500ms cubic-bezier(0.4, 0, 0.2, 1)',
  },

  borders: {
    table: '1px solid rgba(238, 238, 238, 1)',
    active: '1px solid rgba(0, 176, 135, 1)',
    inactive: '1px solid rgba(223, 4, 4, 1)',
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
