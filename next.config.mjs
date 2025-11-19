// next.config.mjs
const isProd = process.env.NODE_ENV === 'production';
const internalHost = process.env.TAURI_DEV_HOST || 'localhost';
export default {
  output: 'export',
  // при необходимости basePath или assetPrefix для корректных путей
};
