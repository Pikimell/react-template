import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import { BrowserRouter } from 'react-router-dom';
import './style/index.css';
import './style/variables.css';
import { ConfigProvider, theme } from 'antd';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ConfigProvider
          theme={{
            algorithm: theme.darkAlgorithm,
            token: {
              // Основні кольори
              colorPrimary: 'var(--primary-color)',
              colorSuccess: 'var(--success-color)',
              colorError: 'var(--danger-color)',
              colorWarning: 'var(--warning-color)',
              colorInfo: 'var(--info-color)',

              // Фон
              colorBgBase: 'var(--primary-dark)',
              colorBgContainer: 'var(--primary-dark)',
              colorBgLayout: 'var(--primary-dark)',
              colorBgElevated: 'var(--secondary-dark)',

              // Текст
              colorTextBase: 'var(--primary-light)',
              colorText: 'var(--primary-light)',

              // Бордери
              colorBorder: 'var(--border-color)',
              borderRadius: 4,

              // Типографіка
              fontFamily: 'var(--font-family-base)',
              fontSize: '1rem',
              lineHeight: 1.5,

              // Тінь
              boxShadow: 'var(--box-shadow)',
            },
          }}
        >
          <App />
        </ConfigProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
