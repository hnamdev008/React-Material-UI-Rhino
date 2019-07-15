import * as React from 'react';
import { MessageType } from '../../../../common/message/MessageType';

export class Alert extends React.Component<AlertProps, {}> {
    private type: MessageType;
    
    constructor(props) {
        super(props);
        this.type = this.props.type;
    }
    
    public render() {
        const cls = this.getClass();

        return (
            <div key={this.props.value} className="alert-wrapper navbar-fixed-top">
                <div className={`alert ${cls}`}>
                    <button type="button"
                            className="close"
                            onClick={ this.props.onAlertClose }>
                                <span aria-hidden="true">&times;</span>
                        </button>
                        <strong>{ this.props.value }</strong>
                </div>
            </div>
        )
    }

    private getClass(): string {
        switch(this.type) {
            case MessageType.SUCCESS:
                return 'alert-success';
            case MessageType.INFO:
                return 'alert-info';
            case MessageType.WARNING:
                return 'alert-warning';
            case MessageType.ERROR:
                return 'alert-danger';
        }
    }
}

export interface AlertProps {
    value: string,
    type: MessageType,
    onAlertClose(): void
}
