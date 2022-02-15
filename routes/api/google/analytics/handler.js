import axios from 'axios';
import { google } from 'googleapis';

const get = async (req, res, next) => {
  try {
    const viewId = process.env.GA_VIEW_ID;

    const call = await axios.post('https://analyticsreporting.googleapis.com/v4/reports:batchGet', config);
    res.end(call);
  } catch (error) {
    console.error(error);
  }
}

export {
  get
}