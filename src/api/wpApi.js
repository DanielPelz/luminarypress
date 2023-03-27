import axios from 'axios';

const getWpApiSettings = () => {
  if (typeof window !== 'undefined' && window.wpApiSettings) {
    return window.wpApiSettings;
  }
  return { root: '', nonce: '' };
};

const { root, nonce } = getWpApiSettings();

const wpApi = axios.create({
  baseURL: root || '/wp-json',
  headers: {
    'X-WP-Nonce': nonce,
  },
});

export default wpApi;