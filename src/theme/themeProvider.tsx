import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { red } from '@mui/material/colors';

// Create a simple theme instance.
export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0091EA',
    },
    secondary: {
      main: '#F19837',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontSize: 14,
    h1: {
      fontSize: 48,
    },
    h2: {
      fontSize: 32,
    },
  },
});

type Props = {
  children: React.ReactNode;
};
const MUIThemeProvider = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MUIThemeProvider;
