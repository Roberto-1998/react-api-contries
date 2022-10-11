import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';
import App from './App';
import ThemeProvider from './context/ThemeContext';

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
    <ReactQueryDevtools initialIsOpen={true} />
  </QueryClientProvider>,

  document.getElementById('app'),
);
