import * as Redux from 'redux';

export interface Action extends Redux.Action {
    type: string,
    context?: number | string
    payload?: any
}

export default Action;