import * as React from 'react';
import { connect } from 'react-redux';
import { EditModalContainer, Props} from '../../common/EditModalContainer';
import EmailTemplateAction from '../../../actions/EmailTemplateAction'
import EmailTemplateState from '../../../model/state/emailTemplate/EmailTemplateState';
import EmailTemplateForm from '../EmailTemplateForm';
import { AppState } from '../../../model/state/AppState';
import { Control } from '../../components/common/Controls';

const EmailTemplateEditModal = (props: Props) => {
    return <EditModalContainer
        title="Edit EmailTemplate"
        action={ EmailTemplateAction }
        {...props}>
            <EmailTemplateForm />
    </EditModalContainer>
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.emailTemplate
})

export default connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(EmailTemplateEditModal);
