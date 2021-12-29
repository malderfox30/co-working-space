import { notification } from 'antd';
import { CoordinateInfor } from './../../generated/schemas';

export const showSuccess = (message: string) => {
  return notification.success({
    message,
  });
};

export const getFileName = (file: string) =>
  file.split('/').pop()?.split('-')?.splice(1).join('-');

export const downloadFile = (url: string) =>
  window.open(`${import.meta.env.VITE_IMAGE_URL}/${url}`);

export const stripHashtag = (code: string) =>
  code?.trim().replace(new RegExp('^#'), '');

export const distance = (
  position1: CoordinateInfor,
  position2: CoordinateInfor,
) => {
  if (
    position1.latitude === position2.latitude &&
    position1.longitude === position2.longitude
  ) {
    return 0;
  } else {
    const radlat1 = (Math.PI * position1.latitude) / 180;
    const radlat2 = (Math.PI * position2.latitude) / 180;
    const theta = position1.longitude - position2.longitude;
    const radtheta = (Math.PI * theta) / 180;
    let dist =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist > 1 ? 1 : dist);
    dist = ((dist * 180) / Math.PI) * 60 * 1.1515 * 1.609344;
    return dist.toFixed(2);
  }
};
