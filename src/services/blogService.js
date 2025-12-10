import { API } from './api';
export const getBlogs = async ()=> {
  const res = await fetch(API + '/api/blogs');
  return res.json();
}
