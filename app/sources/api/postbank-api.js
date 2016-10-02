import client from './client';

export default {
  fetch() {
    return client.get('/api/postbanks')
    .end();
  }
};
