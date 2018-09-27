require('dotenv').config({path:__dirname + '/.env'});

var config = {
  API_KEY: process.env.API_KEY || '',
  API_SECRET: process.env.API_SECRET || '',
  NEW_API_SECRET: process.env.NEW_API_SECRET || '',
  API_SECRET_ID: process.env.API_SECRET_ID || '',
  FROM_NUMBER: process.env.FROM_NUMBER || '',
  ALT_TO_NUMBER: process.env.ALT_TO_NUMBER || '',
  TO_NUMBER: process.env.TO_NUMBER || '',
  MEDIA_ID: process.env.MEDIA_ID || '',
  APP_ID: process.env.APP_ID || '',
  PRIVATE_KEY: process.env.PRIVATE_KEY || '',
  DEBUG: process.env.DEBUG === 'true'
};

module.exports = config;
