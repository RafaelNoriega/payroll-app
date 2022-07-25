import express from 'express';
import userRoutes from './routes/users';
import indexRoutes from './routes/index';

const app = express();

app.use('/', indexRoutes);
app.use('/users', userRoutes);

app.listen(3000);