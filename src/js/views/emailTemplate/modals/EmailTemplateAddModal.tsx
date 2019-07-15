import * as React from 'react';
import { connect } from 'react-redux';
import { AddModalContainer, Props } from '../../common/AddModalContainer';
import EmailTemplateAction from '../../../actions/EmailTemplateAction'
import EmailTemplateState from '../../../model/state/emailTemplate/EmailTemplateState';
import EmailTemplateForm from '../EmailTemplateForm';
import { AppState } from '../../../model/state/AppState';

const EmailTemplateAddModal = (props: Props) => 
    <AddModalContainer
        title="New EmailTemplate"
        action={ EmailTemplateAction }
        {...props}>
            <EmailTemplateForm {...props}/>
    </AddModalContainer>

const mapStateToProps = (app: AppState): Props => ({
    state: app.emailTemplate
})

export default connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(EmailTemplateAddModal);