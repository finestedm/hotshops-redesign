import './App.css';
import { CssBaseline, Stack, ThemeProvider } from '@mui/material';
import theme from './theme';
import { themeDark } from './theme';
import Main from './components/Main/Main';
import TopBar from './components/TopBar/TopBar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Stack spacing={8}>
          <TopBar />
          <Main />
        </Stack>
      </div>
    </ThemeProvider>
  );
}

export default App;
