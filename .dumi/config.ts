// localStorage.setItem('baseURL', 'http://localhost:3000');
const baseURL = localStorage.getItem('baseURL');

export const url = baseURL ? baseURL : 'https://ndzy-server.vercel.app';
