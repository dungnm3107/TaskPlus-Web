import ReactDOM from 'react-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './css/custom-scrollbar.css';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import AuthLayout from './components/layout/AuthLayout';
import Home from './pages/Home';
import Board from './pages/Board';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { Provider } from 'react-redux';
import { store } from './redux/store';

// Hàm debounce
const debounce = (callback, delay) => {
  let timerId;
  return function(...args) {
    const context = this;
    timerId && clearTimeout(timerId);
    timerId = setTimeout(() => {
      callback.apply(context, args);
    }, delay);
  };
};

// Ghi đè lên ResizeObserver
const originalResizeObserver = window.ResizeObserver;
window.ResizeObserver = class ResizeObserver extends originalResizeObserver {
  constructor(callback) {
    const debouncedCallback = debounce(callback, 20);
    super(debouncedCallback);
  }
};

const theme = createTheme({
  palette: { mode: 'dark' }
});

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AuthLayout />}>
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
          </Route>
          <Route path='/' element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path='boards' element={<Home />} />
            <Route path='boards/:boardId' element={<Board />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);

const container = document.getElementById('root');
ReactDOM.render(<App />, container);

export default App;
