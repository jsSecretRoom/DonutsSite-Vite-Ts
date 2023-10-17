import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'
import ReduxStor from './redux/ReduxStor.tsx'

import { QueryClient, QueryClientProvider } from 'react-query';
import { MyProvider} from './Context/Context.tsx';

const queryClient = new QueryClient();

import App from './components/App/App.tsx'
import './index.scss'




ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={ReduxStor}>
      <React.StrictMode>
        <MyProvider>
          <App />
        </MyProvider>
      </React.StrictMode>
    </Provider>
  </QueryClientProvider>
  
);
