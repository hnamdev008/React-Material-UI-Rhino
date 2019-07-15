import * as React from 'react';
import { connect } from 'react-redux';
import { AddModalContainer, Props } from '../../common/AddModalContainer';
import RedirectPageAction from '../../../actions/RedirectPageAction'
import RedirectPageState from '../../../model/state/redirectPage/RedirectPageState';
import RedirectPageForm from '../RedirectPageForm';
import { AppState } from '../../../model/state/AppState';

const RedirectPageAddModal = (props: Props) => 
    <AddModalContainer
        title="New Re-direct Page"
        action={ RedirectPageAction }
        {...props}>
            <RedirectPageForm {...props}/>
    </AddModalContainer>

const mapStateToProps = (app: AppState): Props => ({
    state: app.redirectPage
})

export default connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(RedirectPageAddModal);