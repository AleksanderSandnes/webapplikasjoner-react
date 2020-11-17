import Valg from '../modeller/valg.js';

export const valgId = async (id) => Valg.findById(id);
export const valgListen = async () => Valg.find().populate('bruker', 'email');
export const opprettValg = async (data) => (await Valg.create(data)).populate('email');
export const oppdaterValg = async (id, data) => {
    console.log("Data param i tjenester: " + JSON.stringify(data));

    Valg.finnIdOgOppdater(id, data, {
        new: true,
        runValidators: true,
        useFindAndModify: true,
    });
}

export const fjernValg = async (id) => {
    const valg = await Valg.findById(id);
    valg.remove;
};