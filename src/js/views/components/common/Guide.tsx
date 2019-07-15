import * as React from 'react';

export class Guide extends React.Component<void, void> {
    public render() {
        return ( 
            <div className="guide">
                <span className="glyphicon glyphicon-info-sign"></span>
                <span> { this.props.children }</span>
            </div>
        );
    }
}
