import { createMuiTheme } from '@material-ui/core';

export const themeColors = {
  green: {
    '600': '#2C8646',
  },
  yellow: {
    '600': '#FFB600',
    '500': '#FFCC5E',
    '400': '#FFD376',
    '300': '#FFE2A4',
    '200': '#FFF0D2',
    '100': '#FFF8E8',
  },
  tangerine: {
    '600': '#EB8C00',
    '500': '#F2AF5B',
    '400': '#F3BB73',
    '300': '#F8D1A2',
    '200': '#FCE8D0',
    '100': '#FDF3E8',
  },
  orange: {
    '600': '#D04A02',
    '500': '#E08159',
    '400': '#E49371',
    '300': '#EEB7A0',
    '200': '#F6DBCF',
    '100': '#FBEDE7',
  },
  red: {
    '600': '#E0301E',
    '500': '#EA7065',
    '400': '#EE847B',
    '300': '#F4ADA8',
    '200': '#F9D6D4',
    '100': '#FCEAE9',
  },
  rose: {
    '600': '#D93954',
    '500': '#E67688',
    '400': '#E98999',
    '300': '#F1B0BA',
    '200': '#F8D8DD',
    '100': '#FBEBEE',
  },
  burgundy: {
    '600': '#A32120',
    '500': '#C06465',
    '400': '#C97A7B',
    '300': '#DBA7A6',
    '200': '#EED3D3',
    '100': '#F6E9E9',
  },
  maroon: {
    '600': '#602320',
    '500': '#916663',
    '400': '#A07C79',
    '300': '#C0A7A6',
    '200': '#E0D3D3',
    '100': '#EEE9E8',
  },
  gray: {
    '600': '#736B53',
    '500': '#9E9888',
    '400': '#ABA698',
    '300': '#C7C4BB',
    '200': '#E3E1DD',
    '100': '#F1F0EE',
  },
  neutral: {
    '1000': '#000000',
    '900': '#222222',
    '700': '#6D6E71',
    '600': '#999A9C',
    '500': '#A7A8AA',
    '400': '#C5C5C6',
    '300': '#E2E2E3',
    '200': '#F0F0F1',
    '100': '#F2F2F2',
    '0': '#FFFFFF',
  },
};

export const materialTheme = createMuiTheme({
  palette: {
    primary: {
      main: themeColors.orange[600],
    },
    secondary: {
      main: themeColors.rose[600],
      light: themeColors.rose[200],
      dark: themeColors.rose[600],
    },
    text: {
      primary: themeColors.gray[500],
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          margin: 0,
          padding: 0,
          fontFamily: 'ArialMT',
          fontSize: 16,
        },
        html: {
          margin: 0,
          padding: 0,
        },
        'h1, h2, h3, h4, h5, h6': {
          fontFamily: 'Georgia',
          fontStyle: 'italic',
          fontWeight: 'bold',
        },
        h1: {
          letterSpacing: -0.4,
          fontSize: '2em',
          color: themeColors.neutral[1000],
        },
        h3: {
          letterSpacing: -0.3,
          fontSize: '1,17em',
        },
        p: {
          lineHeight: 1.5,
          letterSpacing: '-0.2px',
        },
      },
    },
    MuiTypography: {},
    MuiButton: {
      root: {
        textTransform: 'initial',
        borderRadius: '.125rem',
      },
      sizeLarge: {
        padding: 16,
      },
      sizeSmall: {
        height: 40,
      },
    },
    MuiOutlinedInput: {
      root: {
        backgroundColor: themeColors.neutral[100],
        borderRadius: '.125rem',
        '&$focused': {
          backgroundColor: '#FFFFFF',
        },
      },
    },
    MuiStepper: {
      root: {
        padding: 0,
      },
    },
    MuiStep: {
      root: {
        backgroundColor: themeColors.orange[600],
      },
      completed: {
        backgroundColor: themeColors.orange[500],
        color: themeColors.neutral[0],
      },
    },
    MuiChip: {
      root: {
        marginRight: 16,
      },
    },
    MuiStepLabel: {
      root: {
        color: themeColors.neutral[0],
        // backgroundColor: themeColors.orange[600],
        '&$disabled': {
          color: themeColors.neutral[100],
          backgroundColor: themeColors.neutral[300],
        },
      },
      iconContainer: {
        padding: '16px 24px',
        color: themeColors.neutral[0],
      },
      labelContainer: {
        padding: '16px 24px',
        color: themeColors.neutral[0],
      },
      label: {
        '&$active': {
          color: themeColors.neutral[0],
        },
        '&$completed': {
          color: themeColors.neutral[0],
        },
      },
      active: {
        color: themeColors.neutral[0],
      },
    },
    MuiStepContent: {
      root: {
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 16,
        paddingBottom: 16,
        marginLeft: 0,
        borderLeft: 0,
        backgroundColor: themeColors.neutral[0],
        '&:disabled': {
          margin: 0,
          padding: 0,
          backgroundColor: 'black',
        },
      },
    },
    MuiStepConnector: {
      root: {
        display: 'none',
      },
    },
    MuiStepIcon: {
      root: {
        width: '2em',
        height: '2em',
      },
    },
  },
});
