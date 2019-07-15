import * as React from 'react';
import { connect } from 'react-redux';
import { EditModalContainer, Props} from '../../common/EditModalContainer';
import ShoalScrapeTaskAction from '../../../actions/ShoalScrapeTaskAction'
import ShoalScrapeTaskState from '../../../model/state/shoalScrapeTask/ShoalScrapeTaskState';
import ShoalScrapeTaskForm from '../ShoalScrapeTaskForm';
import { AppState } from '../../../model/state/AppState';

const ShoalScrapeTaskEditModal = (props: Props) => {
    return <EditModalContainer
        title="Edit Shoal Scrape Task"
        action={ ShoalScrapeTaskAction }
        {...props}>
            <ShoalScrapeTaskForm />
    </EditModalContainer>
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.shoalScrapeTask
})

export default connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(ShoalScrapeTaskEditModal);
