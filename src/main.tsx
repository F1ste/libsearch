import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import { Provider } from 'react-redux'
import { setupStore } from './app/store/store.ts'
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './app/providers/ErrorBoundary.tsx';

const store = setupStore();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ErrorBoundary>
)
