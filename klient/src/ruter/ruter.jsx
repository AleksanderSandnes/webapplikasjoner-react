import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ingenResultat from '../komponenter/ingenResultat';
import hovedLayout from '../oppsett/hoved';
import valg from '../sider/valg';
import opprettValg from '../sider/opprettValg';
import opprettBruker from '../sider/opprettBruker';
import resultat from '../sider/resultat';
import globalBrukerStatus from '../../kontekts/globalBrukerStatus';
test
const ruter = () => (
    <Router>
        <globalBrukerStatus>
            <hovedLayout>
                <Switch>
                    <Route exact path="/opprettbruker">
                        <opprettBruker />
                    </Route>
                    <Route exact path="/opprettvalg">
                        <opprettValg />
                    </Route>
                    <Route exact path="/resultat">
                        <resultat />
                    </Route>
                    <Route exact path="/">
                        <Polls />
                    </Route>
                    <Route path="*">
                        <ingenResultat />
                    </Route>
                </Switch>
            </hovedLayout>
        </globalBrukerStatus>
    </Router>
);

export default ruter;