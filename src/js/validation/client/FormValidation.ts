import { ValidatableInput } from '../../common/validation/ValidatableInput';
import { copy } from '../../common/Util';
import { MessageType } from '../../common/message/MessageType';
import { finalize } from '../ValidationUtil'

export abstract class FormValidation<T extends { input?: any, isValid: boolean }> {
    protected state: T;
    
    constructor(state: T) {
        this.state = state;
    }

    protected finalize(): T {
        return finalize(this.state);
    }
}