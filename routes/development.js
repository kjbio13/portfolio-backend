import express from 'express';
import DEVELOPMENT_DATA from '../data/development-skills.data.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send(DEVELOPMENT_DATA);
});

export default router;