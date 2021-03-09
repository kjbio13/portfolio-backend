import express from 'express';
import DESIGN_DATA from '../data/design-skills.data.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send(DESIGN_DATA);
});

export default router;