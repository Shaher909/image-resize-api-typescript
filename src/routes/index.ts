import express from 'express';
import logger from '../utilities/logger';

const routes = express.Router(); // create the router object
routes.get('/', logger, (req, res) => {
  res.send('api main route connected');
});

export default routes;
