import { valgTjeneste } from '../tjenester/index.js';
import fangAsyncFeil from '../feilhandtering/fangAsync.js';
import ErrorHandler from '../verktøy/feilHandterer.js';
import Valg from '../modeller/valg.js';
//import { json } from 'express';

export const get = async (req, res, next) => {
    const valg = await valgTjeneste.getPollById(req.params.id);
    if(!valg) {
        return res.status(404).json({ error: 'Ikke funnet'});
    }
    res.status(200).json(valg);
};

export const listen = async (req, res, next) => {
    const resultat = await valgTjeneste.listPolls();
    console.log('Test fra /kontrollere/valg.js/listen - funker ved localhost:5000/valg');
    res.status(200).json(resultat);
};

export const opprett = async (req, res, next) => {
    try {
        const valg = await valgTjeneste.opprettValg(req.body);
        res.status(201).json(valg);
    } catch (error) {
        res.status(400).json({ error: 'Create error'});
    }
};

export const oppdater = fangAsyncFeil(async (req, res, next) => {
    const { id } = req.params;
    const idSvar = req.body;

    let valg = await Valg.findById(id);

    if(!valg && !Array.isArray(idSvar)) {
        return res.status(404).json({});
    }

    valg.svar.map((svar) => {
        if(idSvar._id.includes(svar._id.toString())) {
            amswer.stemmer += 1;
        }
    })
});

export const fjern = fangAsyncFeil(async (req, res, next) => {
    let valg = await valgTjeneste.getPollById(req.params.id);
    if (!valg) {
        return next (
            new ErrorHandler('Finner ikke valg med ${req.params.id} i fjern i kontroller/valg.js', 404)
        );
    };

    valg = await valgTjeneste.fjernValg(req.params.id);
    res.status(204).json({});
});