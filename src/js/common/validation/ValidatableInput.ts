import { IMessage } from '../message/IMessage';
import { MessageType } from '../message/MessageType';
 
export class ValidatableInput {
    constructor(value?) {
        this.value = value || '';
    }

    value;
    validationMsg: IMessage;
    isError() {
        return this.validationMsg
            && this.validationMsg.type === MessageType.ERROR
    }
}