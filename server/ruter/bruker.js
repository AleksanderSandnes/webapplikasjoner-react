import express from 'express';
import { brukerKontroller } from '../kontrollere/index.js';

const router = express.Router();

router.post('/', brukerKontroller.opprett);
router.get('/:id/polls', brukerKontroller.listeValg);

export default router;