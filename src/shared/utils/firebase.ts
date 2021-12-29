import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, deleteToken } from 'firebase/messaging';
import { uuidv4 } from '@base-projects/web-uikit';
import { firebaseMessagingConfig } from '#/configs/firebase-config';

initializeApp(firebaseMessagingConfig);

export const messaging = getMessaging();

export const requestToken = (): Promise<string> =>
  new Promise((resolve, reject) => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/firebase-messaging-sw.js')
        .then(() => navigator.serviceWorker.ready)
        .then(registration => {
          getToken(messaging, {
            vapidKey: import.meta.env.VITE_FIREBASE_VAPIDKEY,
            serviceWorkerRegistration: registration,
          })
            .then(token => {
              resolve(token);
            })
            .catch(error => {
              reject(error);
            });
        })
        .catch(error => {
          reject(error);
        });
    }
  });

export const getDeviceID = () => {
  const currentDeviceID = localStorage.getItem('deviceId');
  if (currentDeviceID) return currentDeviceID;
  deleteToken(messaging);
  return uuidv4();
};
