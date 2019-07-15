import * as React from 'react';
import { connect } from 'react-redux';
import { AddModalContainer, Props } from '../../common/AddModalContainer';
import OAuthResultAction from '../../../actions/OAuthResultAction'
import OAuthResultState from '../../../model/state/oAuthResult/OAuthResultState';
import OAuthResultForm from '../OAuthResultForm';
import { AppState } from '../../../model/state/AppState';

const OAuthResultAddModal = (props: Props) => 
    <AddModalContainer
        title="New OAuth Result"
        action={ OAuthResultAction }
        {...props}>
            <OAuthResultForm {...props}/>
    </AddModalContainer>

const mapStateToProps = (app: AppState): Props => ({
    state: app.oAuthResult
})

export default connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(OAuthResultAddModal);