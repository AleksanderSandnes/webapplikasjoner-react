import React, { useState, useContext } from 'react';
import { Input, Button, FormControl, FormLabel, FormHelperText, Flex } from '@chakra-ui/core';
import { post } from "../verktøy/brukerTjeneste.js";
import { globalKontekst } from '../../kontekts/globalBrukerStatus';

const opprettBruker = () => {
    const global = useContext(globalKontekst);
    const [email, settEmail] = useState(null);
    const [passord, settPassord] = useState(null);

    const settEmailen = (e) => {
        settEmail(e.target.value);
    }

    const settPassordet = (e) => {
        settPassord(e.target.value);
    }

    const opprettBrukerData = (e) => {
        e.preventDefault();
        const legitimasjon = {
            email: email,
            passord: passord
        };

        const opprettSvar = async () => {
            await post(legitimasjon);
        
        }
        opprettSvar();

        console.log(email);
        global.updateState(legitimasjon.email);
    }
    return (
        <div>
            <FormControl marginLeft={"20px"}>
                <FormLabel marginBottom={3} htmlFor="email">Email</FormLabel>
                <Input width="400px" size="md" focusBorderColor="#007b5f" type="email" onChange={settEmailen} />
                <FormLabel marginBottom={3} marginTop={3} htmlFor="passord">Passord</FormLabel>
                <Input width="400px" size="md" focusBorderColor="007b5f" type="password" id="passord" onChange={settPassordet} />
            </FormControl>
            <Button
                marginTop="20px"
                marginLeft="20px"
                _hover={{
                    bg: "#0075bf",
                    transform: "scale(1.06)",
                    borderColor: "#000000",}}
                onClick={opprettBrukerData}>Send inn
            </Button>
        </div>
    )
};

export default opprettBruker;