import { API } from './api';
export const getProjects = async ()=> {
  const res = await fetch(API + '/api/projects');
  return res.json();
}
