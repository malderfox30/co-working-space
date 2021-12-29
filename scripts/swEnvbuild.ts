import * as fs from 'fs';
import { join } from 'path';
import * as env from 'dotenv';
import * as prettier from 'prettier';

env.config();

fs.writeFileSync(
  join(__dirname, '../public/firebase-config.js'),
  prettier.format(
    `const firebaseConfig = {
    messagingSenderId: '${process.env.VITE_FIREBASE_MESSANGING_SENDER_ID}',
    apiKey: '${process.env.VITE_FIREBASE_APIKEY}',
    projectId: '${process.env.VITE_FIREBASE_PROJECT_ID}',
    appId: '${process.env.VITE_FIREBASE_APP_ID}',
  }`,
    {
      parser: 'babel',
      singleQuote: true,
    },
  ),
);
