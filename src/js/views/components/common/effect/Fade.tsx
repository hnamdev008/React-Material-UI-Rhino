import * as React from 'react';
import { MessageType } from '../../../../common/message/MessageType';
const ReactCSSTransitionGroup = require('react-addons-css-transition-group');

export class Fade extends React.Component<void, {}> {
    public render() {
        return (
            <ReactCSSTransitionGroup
                    transitionName="skiff-fade"
                    transitionEnterTimeout={200}
                    transitionLeaveTimeout={500}
                    transitionAppearTimeout={200}
                    transitionAppear={true}>
                        { this.props.children }
            </ReactCSSTransitionGroup>
        )
    }
}
