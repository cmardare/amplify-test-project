import logo from '../assets/images/logo.svg';
import '../assets/css/App.css';

import {
    withAuthenticator, AmplifySignOut
} from "@aws-amplify/ui-react";

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <AmplifySignOut />
            </header>
        </div>
    )
}

export default withAuthenticator(Home);
