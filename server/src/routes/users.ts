import { Router } from "express";
const router = Router();

router.get('/', (req, res, next) => {
    res.send('Hello World');
});

router.post('/');

export default router;