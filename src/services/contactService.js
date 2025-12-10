import { API } from './api';
export const sendContact = async (payload) => {
  await fetch(API + '/api/contact', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) });
}
