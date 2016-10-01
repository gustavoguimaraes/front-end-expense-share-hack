import changeCase from 'change-case';

const context = require.context('./', true, /.*/);

const components = {};

context.keys().forEach((key) => {
  if (!(/\.js/).test(key) && !(/index\.js/).test(key) && key.charAt(0) !== '_') {
    const keyParts  = key.split('/');
    const dirs      = keyParts.filter((j) => keyParts.indexOf(j) > 0 && keyParts.indexOf(j) < keyParts.length - 1);
    const file      = changeCase.pascalCase(keyParts[keyParts.length - 1]);
    let c           = components;

    let i   = 0;
    let len = 0;

    for (i = 0, len = dirs.length; i < len; i++) {
      const dir = changeCase.pascalCase(dirs[i]);

      if (i === len - 1) {
        c[dir]       = c[dir] || {};
        c[dir][file] = context(key).default;
      } else {
        c = c[dir] = c[dir] || {};
      }
    }
  }
});

export default components;
