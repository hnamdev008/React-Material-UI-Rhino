import * as React from 'react';
import { Navbar } from './containers/navigation/Navbar';
import { ContextPane } from './containers/pane/ContextPane';
import LoginModal from '../views/identity/LoginModal';
import Feedback from '../views/common/Feedback';
import FlatButton from 'material-ui/FlatButton';
 
export class App extends React.Component<void, void> {
    public render() {
        return (
            <div>
                <LoginModal />
                <Navbar />               
                <Feedback />
                <div id="content">
                    { this.props.children }
                </div> 
                <div id="footer">&copy;2016 Rhino Security Labs. All Rights Reserved.</div>
            </div>        
        );
    }
}