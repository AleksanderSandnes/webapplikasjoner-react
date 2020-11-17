import React, { useEffect, useState } from 'react';
import { Box, Heading, Flex, Text, Icon, Button, Checkbox } from '@chakra-ui/core';
import { liste } from '../verktøy/valgTjeneste';

const resultat = () => {
    const [valg, settValg] = useState();
    const [feil, settFeil] = useState(null);

    useEffect(() => {
        const hentInformasjon = async () => {
            const { data, feil } = await liste();
            if(feil) {
                settFeil(feil);
            } else {
                settValg(data);
            }
        };
        hentInformasjon();
    }, []);

    return (
        <section>
            <Heading marginLeft={"20px"} mb={2} as="h1" fontSize="xl">
                Resultater
        </Heading>
        {feil && <p>{feil}</p>}
        <Flex direction={"column"}>
            {valg &&
                valg.map((valget) => (
                    <Box p="6" as="article" key={valget._id}>
                        <Heading mb={2} as="h2" size="md" color="#007b5f">
                            {valget.spm}
                        </Heading>
                        <div fontSize="md" mb={2}>
                        {valget.svar.map((svaret) => {
                            if(svaret.svaret !== null){
                                return(
                                    <Flex key={svaret._id}>
                                    <Text  width="200px"><Icon name="chevron-right" mr={2} />{svaret.svaret}</Text>
                                    <Text  width="200px"><Icon name="chevron-right" mr={2} />{svaret.stemmer}</Text>
                                    </Flex>
                                )
                            }})
                        }
                        </div>
                        <Text fontSize="sm" marginTop="10px" mb={2}>
                            {new Date(svaret.createdAt).toDateString()}
                        </Text>
                        <Text fontSize="lg"><Icon name="email" mr={2} />{}</Text>
                    </Box>
                ))}
        </Flex>
      </section>
    );
};

export default resultat;