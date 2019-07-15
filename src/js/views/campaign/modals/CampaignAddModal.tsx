import * as React from 'react';
import { connect } from 'react-redux';
import { AddModalContainer, Props } from '../../common/AddModalContainer';
import CampaignAction from '../../../actions/CampaignAction'
import CampaignState from '../../../model/state/campaign/CampaignState';
import CampaignForm from '../CampaignForm';
import { AppState } from '../../../model/state/AppState';

const CampaignAddModal = (props: Props) => 
    <AddModalContainer
        title="New Campaign"
        action={ CampaignAction }
        {...props}>
            <CampaignForm {...props}/>
    </AddModalContainer>

const mapStateToProps = (app: AppState): Props => ({
    state: app.campaign
})

export default connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(CampaignAddModal);