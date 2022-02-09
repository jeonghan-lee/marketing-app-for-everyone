// don't store it to your database
import fs from 'fs';

const get = (req, res, next) => {
  if(process.env.ACCESS_TOKEN) {
    const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
    res.json({ACCESS_TOKEN: ACCESS_TOKEN});
    res.end();
  } else {
    res.end();
  }
}

const post = async (req, res, next) => {
  if(req.query.access_token) {
    const ACCESS_TOKEN = req.query.access_token;
    const ENV = fs.createWriteStream('../../../.env')
    `ACCESS_TOKEN=${ACCESS_TOKEN}`.pipe(ENV);
    res.end();
  } else {
    res.end();
  }
}

export {
  get,
  post
}