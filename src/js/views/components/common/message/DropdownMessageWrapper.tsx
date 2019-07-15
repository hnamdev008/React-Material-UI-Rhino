import * as React from 'react';
import { connect } from 'react-redux';
import { SearchSelection } from '../dropdown/SearchSelection';
import { IMessage } from '../../../../common/message/IMessage'
import { ValidatableInput } from '../../../../common/validation/ValidatableInput';
import { Message } from './Message';
import { MessageType } from '../../../../common/message/MessageType';

export class DropdownMessageWrapper extends React.Component<{ msg: IMessage }, {}> {
    public render() {
        const searchSelectionAttribs = React.Children.only(this.props.children).props;
        
        let feedback = '';
        const msg = this.props.msg;
        let msgEl: React.ReactElement<ValidatableInput> = null;

        if(msg) {
            msgEl = <Message value={msg.value} type={msg.type} />
        }
        
        return (
            <div>
                <div>
                    <SearchSelection 
                        {...searchSelectionAttribs} />
                    <div className="dropdown-msg">
                        { msgEl }
                    </div>
                </div>
            </div>
        );
    }
}

export interface DropdownMessageWrapperProps {
    msg: IMessage
}