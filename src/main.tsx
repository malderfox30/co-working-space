import { ApolloProvider } from '@apollo/client';
import * as Sentry from '@sentry/react';
import { ConfigProvider } from 'antd';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import enUS from 'antd/es/locale/en_US';
import { getPopupContainer, ResetCSS } from '@base-projects/web-uikit';
import { BrowserRouter } from 'react-router-dom';
import App from './routers/App';
import './configs/antd';
import './configs/aws-cognito';
import { formConfig } from './configs/config';
import './configs/sentry';
import './configs/theme/index.less';
import { client } from './graphql/client';
import i18n from './shared/i18n';

ReactDOM.render(
  <Sentry.ErrorBoundary fallback={<p>An error has occurred</p>}>
    <I18nextProvider i18n={i18n}>
      <ResetCSS />
      <ApolloProvider client={client}>
        <ConfigProvider
          getPopupContainer={getPopupContainer}
          form={formConfig}
          componentSize="large"
          locale={enUS}
        >
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ConfigProvider>
      </ApolloProvider>
    </I18nextProvider>
  </Sentry.ErrorBoundary>,
  document.getElementById('root'),
);
