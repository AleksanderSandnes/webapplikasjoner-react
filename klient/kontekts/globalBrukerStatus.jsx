import React, { lagKontekst, brukstilstand } from 'react';

export const globalKontekst = lagKontekst ({
    tilstand: "",
    oppdaterTilstand: (bruker) => {}
});

export const globalBrukerStatus = ({children}) => {
    const [tilstand, settTilstand] = brukstilstand();

    const oppdaterTilstand = (bruker) => {
        settTilstand(bruker);
    }

    return <globalKontekst.Provider value={{tilstand, oppdaterTilstand}} > {children}</globalKontekst.Provider>;
}