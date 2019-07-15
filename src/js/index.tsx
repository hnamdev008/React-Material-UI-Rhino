import * as React from 'react'
import * as ReactDom from 'react-dom'
import { AppContainer } from 'react-hot-loader';

import { MainRoot } from './routes/main';

const rootEl = document.getElementById('mount');

const render = (MainRoot) => {
    ReactDom.render(
        <AppContainer>
            <MainRoot />
        </AppContainer>,
        rootEl
    )
};

render(MainRoot);

// declare const module: any;

if ( module.hot ) {
    module.hot.accept('./routes/main', () => {
        render(MainRoot);
    });
}
