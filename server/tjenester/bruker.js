import Valg from '../modeller/valg.js';
import Bruker from '../modeller/bruker.js';

export const opprettBruker = async (data) => {
    Bruker.create(data);
};

export const listeBrukerValg = async (id) => {
    if (id) {
        const valget = await Valg.find({ Bruker: id }).populate('bruker', 'email');
        return valget;
    }
};