const mongoose = require('mongoose');

mongoose.connect( process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((x) => {
    console.log('connectado no banco de dados');
  })
  .catch((error) => {
    console.error('erro ao connectar no mongo');
  });
