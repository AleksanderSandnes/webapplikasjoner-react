import React from 'react';
import { useContext } from 'react';
import { Navlink } from 'react';
import styled from 'styled-components';

const StilertNavigasjon = styled.nav`
    width: 100%;
`;

const NavigasjonsMeny = styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
    align-items: center;
    padding: 0 20px;
`;

const NavigasjonsMenyObjekt = styled.li`
    padding: 0 20px;

    &:first-child {
        padding-left: 0;
    }

    & > a {
        color: #333;
        display: block;
        font-size: 14px;
        font-weight: 700;
        text-decoration: none;
        padding: 5px 0;
        line-height: 3.456;

        &.active {
            color: #007b5f;
            border-bottom: 4px solid #007b5f;
        }
    }
`;

const Navigasjon = () => {
    return(
        <StilertNavigasjon>
            <NavigasjonsMeny>
                <NavigasjonsMenyObjekt>
                    <Navlink exact to="/" activeClassName="active">
                        Hjem
                    </Navlink>
                </NavigasjonsMenyObjekt>
                <NavigasjonsMenyObjekt>
                    <Navlink exact to="/opprettBruker" activeClassName="active">
                        Opprett bruker
                    </Navlink>
                </NavigasjonsMenyObjekt>
                <NavigasjonsMenyObjekt>
                    <Navlink exact to="/opprettPoll" activeClassName="active">
                        Opprett Poll
                    </Navlink>
                </NavigasjonsMenyObjekt>
                <NavigasjonsMenyObjekt>
                    <Navlink exact to="/resultat" activeClassName="active">
                        Resultat
                    </Navlink>
                </NavigasjonsMenyObjekt>
            </NavigasjonsMeny>
        </StilertNavigasjon>
    )
};

export default Navigasjon;

