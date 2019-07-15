//declare const CKEDITOR: any;
//CKEDITOR.basePath="assets/vendors/ckeditor/"

import * as injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import * as React from 'react'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router';
import { permit } from '../security/RenderRules';
import { Role } from '../security/Role';
import { Identity } from '../security/Identity';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import store from '../reducers/store';
import { Routes } from './routes';
const MuiDarkBaseTheme = darkBaseTheme;
MuiDarkBaseTheme.fontFamily = 'rajdhani';

permit(Role.AUTHENTICATED);
//initialState: AppState as second arg for hydration; default state handeled by each reducer

//visually identify the current Sandbar server
Identity.Server.describe();
Identity.heartBeat();

export class MainRoot extends React.Component<void, void> {
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(MuiDarkBaseTheme)}>
                <Provider store={store}>
                    <Router history={ browserHistory } routes={ Routes } />
                </Provider>
            </MuiThemeProvider>
        );
    }
}


