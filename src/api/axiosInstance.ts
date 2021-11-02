import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://data.messari.io/api',
  headers: {
    'x-messari-api-key': 'adfe7420-3054-4d13-bac4-e0442ff5b174',
  },
});
