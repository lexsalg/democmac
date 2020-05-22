import { environment as env } from '@env/environment';
import { Subscription } from 'rxjs';

export function setUrl(uri: string) {
  const domain = `${env.protocol}://${env.domain}`;
  const subdomain = env.debugApi ? '/' : `/${env.apiName}/`;
  const URL = domain + subdomain + uri;
  return URL;
}

export function toAAmmdd(fecha: Date): number {
  const f = fecha.toLocaleDateString();
  const date = f.split('/');
  const aaaa = date[2];
  const mes = Number(date[0]);
  const mm = mes < 10 ? '0' + mes : mes;
  const dia = Number(date[1]);
  const dd = dia < 10 ? '0' + dia : dia;
  return Number(`${aaaa}${mm}${dd}`);

  // const aaaa = fecha.getFullYear();
  // const mes = fecha.getMonth() + 1;
  // const mm = mes < 10 ? '0' + mes : mes;
  // const dia = fecha.getDate();
  // const dd = dia < 10 ? '0' + dia : dia;
  // return Number(`${aaaa}${mm}${dd}`);
}

export function unSubscribe(subscription: Subscription) {
  if (subscription != undefined) subscription.unsubscribe();
}

export function getFileName(fileName: string) {
  const str = fileName.split('.');
  return str[0];
}

export function getFileExtension(fileName: string) {
  const str = fileName.split('.');
  return str[1];
}
