import React, { useEffect, useState } from 'react';
import { Box, Heading, Flex, Text, Icon, List, CheckBox, Button } from '@chakra-ui/core';
import { liste } from '../verktøy/valgTjeneste';
import { oppdater } from '../verktøy/valgTjeneste';

const valg = () => {
    const [valg, settValg] = useState();
    const [feil, settFeil] = useState(null);
    const [valgtSvar, settSvar] = useState([]);

    useEffect(() => {
        const hentInformasjon = async () => {
          const { data, feil } = await liste();
          if (feil) {
            settFeil(feil);
          } else {
            settValg(data);
          }
        };
        hentInformasjon();
      }, []);
    
    const markertSvar = (svar) => {
        valgtSvar.map((svaret) => {
            if(svaret === svar) {
                slettSvar(svar);
                return;
            }},
            settSvar([svar, ...valgtSvar]));
    }

    const slettSvar = (toRemove) => {
        const svaretErSlettet = valgtSvar.filter((a) => a !== toRemove);
        settSvar([...svaretErSlettet]);
    }
    
    const sendInnSvar = (e) => {
        console.log("Alle svar");
        console.log(valgtSvar);
        const oppdaterStemmer = async () => {
            valgtSvar.map((svaret) => {
                oppdater(e.target.id, svaret)
            })
        };
        oppdaterStemmer();
        valgtSvar.map((svaret) => slettSvar(svaret));
    }
    return (
        <section>
            <Heading marginLeft={"20px"} mb={2} as="h1" size="md">
                Valg
            </Heading>
            {feil && <p>{feil}</p>}
            <Flex direction={"column"}>
                {valg &&
                    valg.map((valget) => (
                        <Box p="6" as="article" key={valget.id}>
                            <Heading mb={2} as="h2" size="sm" color="#007b5f">
                                {valget.spm}
                            </Heading>
                            <div fontSize="lg" mb={2}>
                                {valget.svar.map((svaret) => {
                                    if(svaret.svaret !== null){
                                        return(
                                            <Flex key={svaret._id} >
                                                <Text width={"200px"}><Icon name="chevron-right" mr={2} />{svaret.svaret}</Text>
                                                <Checkbox marginLeft={"10px"} variantColor={"green"} name={"checkbox"}  onChange={() => markertSvar(svar)}/>
                                            </Flex>
                                        )
                                }})
                }
              </div>
              <Text fontSize="sm" mb={2} mt={"10px"}>
                <Icon name="time" mr={2} />
                {new Date(valget.createdAt).toDateString()}
              </Text>
              <Text fontSize="lg"><Icon name="email" mr={2}/> {valget.user ? valget.user : "Anonymous"}</Text>
              <Button
                marginTop="20px"  
                _hover={{
                    bg: "#007b5f",
                    transform: "scale(1.06)",
                    borderColor: "#000000",}} 
                id={valget.id} onClick={sendInnSvar}>Send inn</Button>  
            </Box>
          ))}
      </Flex>
    </section>
    );
};

export default valg;