import express from 'express';
import PERSONAL_DATA from '../data/personal-skills.data.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send(PERSONAL_DATA);
});

export default router;