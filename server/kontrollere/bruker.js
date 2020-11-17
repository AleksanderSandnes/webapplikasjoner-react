import { brukerTjeneste } from '../tjenester/index.js';

import fangAsyncFeil from '../feilhandtering/fangAsync.js';

export const opprett = fangAsyncFeil(async (req, res, next) => {
    console.log(req.email);
    const bruker = await brukerTjeneste.opprettBruker(req.body);
    res.status(201).json(bruker);
});

export const listeValg = fangAsyncFeil(async (req, res, next) => {
    const { id } = req.params;
    const valget = await brukerTjeneste.listeBrukerValg(id);
    res.status(200).json(valget);
});