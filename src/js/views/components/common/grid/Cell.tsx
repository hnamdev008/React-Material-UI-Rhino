import * as React from 'react';

export interface CellProps {
    text: string
    cb(): void
}

export class Cell extends React.Component<CellProps, {}> {
    public render() {
        return (
            <a href="#" onClick={this.props.cb} >
            <div className="cell">
                <div>{ this.props.text.toUpperCase() }</div>
                <div className="ic"><span className="glyphicon glyphicon-eye-open"></span></div>
            </div>
            </a>
        );
    }
}