import ky from 'ky';

const api = ky.extend({
  prefixUrl: 'https://api.nasa.gov/neo/rest/v1/',
  searchParams: {
    api_key: process.env.NASA_API_KEY as string,
  },
});

export default api;
