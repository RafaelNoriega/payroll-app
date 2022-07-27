import express, {Request, Response, NextFunction} from 'express';
import bodyParser from 'body-parser';

import userRoutes from './routes/users';
import indexRoutes from './routes/index';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', indexRoutes);
app.use('/users', userRoutes);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    res.send(error.message);
});

app.listen(8081);