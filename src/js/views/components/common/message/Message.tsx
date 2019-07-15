import * as React from 'react';
import { MessageType } from '../../../../common/message/MessageType';

export class Message extends React.Component<MessageProps, {}> {
    private type: MessageType;
    
    constructor(props) {
        super(props);
        this.type = this.props.type;
    }
    
    public render() {
        const cls = this.getClass();

        return (
            <div className="input-msg-wrapper">
                <span className={`${cls} input-msg`}>
                    {this.props.value}
                </span>
                <span className="tri"></span>
            </div>
        )
    }

    private getClass(): string {
        switch(this.type) {
            case MessageType.SUCCESS:
                return 'text-success';
            case MessageType.INFO:
                return 'text-info';
            case MessageType.WARNING:
                return 'text-warning';
            case MessageType.ERROR:
                return 'text-danger';
        }
    }
}

export interface MessageProps {
    value: string,
    type: MessageType
}
