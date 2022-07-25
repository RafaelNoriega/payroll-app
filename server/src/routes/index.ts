import {Router} from 'express';

const router = Router();

router.get('/', (req, res, next) => {
    res.send('INDEX ENDPOINT');
});

export default router;