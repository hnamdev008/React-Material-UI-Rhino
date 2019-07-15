import * as React from 'react';
import { connect } from 'react-redux';
import { IMessage } from '../../../../common/message/IMessage'
import { ValidatableInput } from '../../../../common/validation/ValidatableInput';
import { Message } from './Message';
import { MessageType } from '../../../../common/message/MessageType';

export class InputMessageWrapper extends React.Component<InputMessageWrapperProps, {}> {
    public render() {
        const inputAttribs = React.Children.only(this.props.children).props;
        
        let feedback = '';
        const msg = this.props.msg;
        let msgEl: React.ReactElement<ValidatableInput> = null;

        if(msg) {
            msgEl = <Message value={msg.value} type={msg.type} />
        
            switch(msg.type) {
                case MessageType.ERROR:
                feedback = `has-error`;
                break;
            }
        }
        
        return (
            <div>
                <div
                    className={`form-group input-group-lg has-feedback ${feedback}`}
                    style={this.props.style}>
                        <input
                            className="form-control"
                            {...inputAttribs} />
                    { msgEl }
                </div>
            </div>
        );
    }
}

export interface InputMessageWrapperProps {
    msg: IMessage
    style?: React.CSSProperties
}