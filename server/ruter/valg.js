import express from 'express';
import { valgKontroller } from '../kontrollere/index.js';

const router = express.Router();

router.get('/:id', valgKontroller.get);
router.get('/', valgKontroller.listen);
router.post('/', valgKontroller.opprett);
router.put('/:id', valgKontroller.oppdater);
router.delete('/:id', valgKontroller.fjern);

export default router;