import { Router, RequestHandler } from "express";
import {userRegister} from '../controllers/users_controller';

const router = Router();

router.get('/', (req, res, next) => {
    res.send('User will be returned');
});

router.post('/register', userRegister);

export default router;