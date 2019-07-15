import * as React from 'react';
import { connect } from 'react-redux';
import { AddModalContainer, Props } from '../../common/AddModalContainer';
import ShoalScrapeTaskAction from '../../../actions/ShoalScrapeTaskAction'
import ShoalScrapeTaskState from '../../../model/state/shoalScrapeTask/ShoalScrapeTaskState';
import ShoalScrapeTaskForm from '../ShoalScrapeTaskForm';
import { AppState } from '../../../model/state/AppState';

const ShoalScrapeTaskAddModal = (props: Props) => 
    <AddModalContainer
        title="New Shoal Scrape Task"
        action={ ShoalScrapeTaskAction }
        {...props}>
            <ShoalScrapeTaskForm {...props}/>
    </AddModalContainer>

const mapStateToProps = (app: AppState): Props => ({
    state: app.shoalScrapeTask
})

export default connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(ShoalScrapeTaskAddModal);