const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));

app.use(express.static('src'));

if (module === require.main) {
  const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`server listenin on port ${server.address().port}`);
  });
}

module.exports = app;
