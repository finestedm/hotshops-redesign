import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';
import CustomCard from './components/CustomCard/CustomCard'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <CustomCard />
      </div>
    </ThemeProvider>
  );
}

export default App;
