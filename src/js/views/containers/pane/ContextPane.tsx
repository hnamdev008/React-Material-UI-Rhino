import * as React from 'react';
import { connect } from 'react-redux';
const ReactCSSTransitionGroup = require('react-addons-css-transition-group');


class Container extends React.Component<{}, { scroll: boolean }> {
    public render() {
        return (

            <ReactCSSTransitionGroup
                    transitionName="skiff-slide"
                    transitionEnterTimeout={200}
                    transitionLeaveTimeout={500}
                    transitionAppear={true}>
                        <div id="context-pane">
                            <div id="context-pane-content">
                            </div>
                            <button onClick={ () => { this.state.scroll = true } }id="context-pane-toggle">
                                <span className="glyphicon glyphicon-option-vertical"></span>
                            </button>
                        </div>
            </ReactCSSTransitionGroup>
        );
    }
}

export const ContextPane = connect()(Container);    
