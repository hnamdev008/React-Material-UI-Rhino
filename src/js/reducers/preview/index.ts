import { Reducer } from 'redux';
import { Action } from '../../actions/Action';
import { ActionType } from '../../actions/ActionType';
import PreviewState from '../../model/state/preview/PreviewState';
import { copy } from '../../common/Util';
import { ValidatableInput } from '../../common/validation/ValidatableInput';

const defaultState = {
    open: false,
    startRequest: false,
    emailConfirmed: false,
    landingPageConfirmed: false,
    redirectPageConfirmed: false
}

const reducer: Reducer<PreviewState> = (state: PreviewState = defaultState, action: Action): PreviewState => {
    
    const newState = copy<PreviewState>(state);

    switch(action.type) {
        case ActionType.ENGAGEMENT_TOGGLE_PREVIEW:
            newState.open = state.open === true ? false: true;
            newState.engagement = action.payload;
            return newState;

        case ActionType.EMAIL_PREVIEW_CONFIRMED:
            newState.emailConfirmed = true;
            return newState;
   
        case ActionType.LANDING_PAGE_PREVIEW_CONFIRMED:
            newState.landingPageConfirmed = true;
            return newState;

        case ActionType.REDIRECT_PAGE_PREVIEW_CONFIRMED:
            newState.redirectPageConfirmed = true;
            return newState;

        case ActionType.ENGAGEMENT_CONFIRM_START:
            newState.startRequest = true;
            newState.open = true;
            newState.engagement = action.payload;
            return newState;
       
        default: return state;
    }
};

export default reducer;