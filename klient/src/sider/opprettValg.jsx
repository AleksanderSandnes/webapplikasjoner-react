import React, {useState, useContext } from 'react';
import { Input, Button, List } from '@chakra-ui/core';
import { post } from '../verktøy/valgTjeneste';
import { globalKontekst } from '../../kontekts/globalBrukerStatus';

const opprettValg = () => {
    const email = useContext(globalKontekst);
    const [valg1, settValgTil1] = useState(null);
    const [valg2, settValgTil2] = useState(null);
    const [valg3, settValgTil3] = useState(null);
    const [valg4, settValgTil4] = useState(null);
    const [sporsmal, settSpm] = useState(null);

    const svar1 = (e) => {
        settValgTil1(e.target.value);
    }

    const svar2 = (e) => {
        settValgTil2(e.target.value);
    }

    const svar3 = (e) => {
        settValgTil3(e.target.value);
    }

    const svar4 = (e) => {
        settValgTil4(e.target.value);
    }

    const spmEndring = (e) => {
        settSpm(e.target.value);
    }

    const sendInnSvar = (e) => {
        e.preventDefault();
        const svar = {
            spm: sporsmal,
            bruker: email.state,
            svar: [
                { svar: valg1 },
                { svar: valg2 },
                { svar: valg3 },
                { svar: valg4 },
            ],
        };

        const opprettSvarSeddel = async () => {
            await post(svar);
        }
        opprettSvarSeddel();
    }
    return (
        <div>
            <form>
                <Input width="400px" size="md" focusBorderColor="#007b5f" placeholder="Sporsmal" type="text" onChange={spmEndring} />
                <Input mt={"10px"} width="400px" size="md" focusBorderColor="007b5f" placeholder="Svar her" type="text" onChange={svar1} />
                <Input mt={"10px"} width="400px" size="md" focusBorderColor="007b5f" placeholder="Svar her" type="text" onChange={svar2} />
                <Input mt={"10px"} width="400px" size="md" focusBorderColor="007b5f" placeholder="Svar her" type="text" onChange={svar3} />
                <Input mt={"10px"} width="400px" size="md" focusBorderColor="007b5f" placeholder="Svar her" type="text" onChange={svar4} />
            <Button
                marginTop="20px"
                marginLeft="20px"
                _hover={{
                    bg: "#007b5f",
                    transform: "scale(1.06)",
                    borderColor: "#000000",}}
                onClick={sendInnSvar}>Send inn
            </Button>
            </form>
        </div>
    )
}

export default opprettValg;