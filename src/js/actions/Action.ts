import * as Redux from 'redux';
import { ActionType } from './ActionType';

export interface Action extends Redux.Action {
    type: ActionType,
    context?: number | string
    payload?: any
}