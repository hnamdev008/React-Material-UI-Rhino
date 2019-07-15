import * as React from 'react';
import { connect } from 'react-redux';
import { EditModalContainer, Props} from '../../common/EditModalContainer';
import OAuthResultAction from '../../../actions/OAuthResultAction'
import OAuthResultState from '../../../model/state/oAuthResult/OAuthResultState';
import OAuthResultForm from '../OAuthResultForm';
import { AppState } from '../../../model/state/AppState';

const OAuthResultEditModal = (props: Props) => {
    return <EditModalContainer
        title="Edit OAuth Result"
        action={ OAuthResultAction }
        {...props}>
            <OAuthResultForm />
    </EditModalContainer>
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.oAuthResult
})

export default connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(OAuthResultEditModal);
