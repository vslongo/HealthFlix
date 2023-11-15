import { adminJs, adminJsRouter } from './adminjs';
import { sequelize } from './database';
import express from 'express';

const app = express();

app.use(express.static('public'));

app.use(adminJs.options.rootPath, adminJsRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
  })
  console.log(`Server is running in http://localhost:${PORT}`);
});