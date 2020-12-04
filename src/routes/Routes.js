import React from "react"
import { Route, Switch } from "react-router-dom";

import Home from "../containers/Home";
import {withAuthenticator} from "@aws-amplify/ui-react";

function Routes(){
    return (
        <Switch>
            <Route path="/" exact component={Home} />
        </Switch>
    )
}

export default withAuthenticator(Routes)