import * as React from 'react';
import { connect } from 'react-redux';
import { EditModalContainer, Props} from '../../common/EditModalContainer';
import CampaignAction from '../../../actions/CampaignAction'
import CampaignState from '../../../model/state/campaign/CampaignState';
import CampaignForm from '../CampaignForm';
import { AppState } from '../../../model/state/AppState';

const CampaignEditModal = (props: Props) => {
    return <EditModalContainer
        title="Edit Campaign"
        action={ CampaignAction }
        {...props}>
            <CampaignForm />
    </EditModalContainer>
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.campaign
})

export default connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(CampaignEditModal);
