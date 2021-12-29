import { RewriteFrames } from '@sentry/integrations';
import * as Sentry from '@sentry/react';

export const SentryCredentials = {
  dsn: import.meta.env.VITE_SENTRY_DSN,
  environment: import.meta.env.VITE_NODE_ENV,
  integrations: [new RewriteFrames()],
  tracesSampleRate: 1.0,
};

Sentry.init(SentryCredentials);
