import express from 'express';
import HOBBIES_DATA from '../data/hobbies.data.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send(HOBBIES_DATA);
});

export default router;