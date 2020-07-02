/**
 * @file 服务端入口文件
 * @author 炽翎
 */
import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import router from './router';

const app = express();

app.all('*', (req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Origin', 'http://localhost:3333');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'application/json');
  res.header('Content-Type', 'application/json');

  if (req.method == 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

app.listen(3000, '0.0.0.0', () => {
  console.log('Server in running.');
});
