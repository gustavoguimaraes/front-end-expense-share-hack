import agent from 'superagent';
import defaults from 'superagent-defaults';
import humps from 'humps';
import promise from 'superagent-promise';

// lib
import jwtFromLocalStorage from '../../lib/jwt-from-local-storage';

const client = defaults(promise(agent, Promise));

client
  .serialize((data) => JSON.stringify(humps.decamelizeKeys(data)))
  .on('request', (req) => {
    req.once('response', (res) => {
      if (res.text && res.text.length > 0) {
        res.body = humps.camelizeKeys(JSON.parse(res.text));
      }
    });

    req.url = process.env.API_URL + req.url;
    req.header.Authorization = `Bearer ${jwtFromLocalStorage()}`;
  });

export default client;
