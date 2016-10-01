const express = require('express'),
      loader  = require('pwny'),
      path    = require('path');

const app = express();

loader(app, { configPath: './server/config/initializers' });

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(process.env.PORT || 8080);
