require('dotenv').config();

// module.exports = {
//     APP_ID: 'aa7871fd',
//     API_KEY: 'f8ffabb071535145d441766e2cc529f6',
//     BASE_URL: 'https://api.adzuna.com/v1/api/jobs',
//     BASE_PARAMS: 'search/1?&results_per_page=20&content-type=application/json',
//   };

  module.exports = {
    APP_ID: process.env.APP_ID,
    API_KEY: process.env.API_KEY,
    BASE_URL: 'https://api.adzuna.com/v1/api/jobs',
    BASE_PARAMS: 'search/1?&results_per_page=20&content-type=application/json',
  };