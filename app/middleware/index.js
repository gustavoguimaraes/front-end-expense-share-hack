import { applyMiddleware } from 'redux';

const context = require.context('./', true, /.*/);

const middleware = [];

context.keys().forEach((key) => {
  if (!(/\.js/).test(key) && !(/index/).test(key)) {
    middleware.push(context(key).default);
  }
});

export default applyMiddleware.apply(this, middleware);
