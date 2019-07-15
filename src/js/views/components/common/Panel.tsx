import * as React from 'react';
import { sift } from './Controls';

interface PanelProps {
    title: string
}

export class Panel extends React.Component<PanelProps, {}> {
    
    public render() {
        const sifted = sift(this.props.children);

        return (
            <div>
                <div id="content-body">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                                <div id="panel-title">
                                    <h3>{this.props.title}</h3>
                                </div>
                                <div id="panel-context">
                                    <ul className="list-inline">
                                        { sifted.controls }
                                    </ul>
                                </div>
                        </div>
                        <div className="panel-body">
                            { sifted.others }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}