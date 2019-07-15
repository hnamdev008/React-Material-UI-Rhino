import * as React from 'react';
import { connect } from 'react-redux';
import { AddModalContainer, Props } from '../../common/AddModalContainer';
import OAuthConsumerAction from '../../../actions/OAuthConsumerAction'
import OAuthConsumerState from '../../../model/state/oAuthConsumer/OAuthConsumerState';
import OAuthConsumerForm from '../OAuthConsumerForm';
import { AppState } from '../../../model/state/AppState';

const OAuthConsumerAddModal = (props: Props) => 
    <AddModalContainer
        title="New OAuth Consumer"
        action={ OAuthConsumerAction }
        {...props}>
            <OAuthConsumerForm {...props}/>
    </AddModalContainer>

const mapStateToProps = (app: AppState): Props => ({
    state: app.oAuthConsumer
})

export default connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(OAuthConsumerAddModal);