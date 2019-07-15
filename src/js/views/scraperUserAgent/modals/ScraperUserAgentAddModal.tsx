import * as React from 'react';
import { connect } from 'react-redux';
import { AddModalContainer, Props } from '../../common/AddModalContainer';
import ScraperUserAgentAction from '../../../actions/ScraperUserAgentAction'
import ScraperUserAgentState from '../../../model/state/scraperUserAgent/ScraperUserAgentState';
import ScraperUserAgentForm from '../ScraperUserAgentForm';
import { AppState } from '../../../model/state/AppState';

const ScraperUserAgentAddModal = (props: Props) => 
    <AddModalContainer
        title="New Scraper User Agent"
        action={ ScraperUserAgentAction }
        {...props}>
            <ScraperUserAgentForm {...props}/>
    </AddModalContainer>

const mapStateToProps = (app: AppState): Props => ({
    state: app.scraperUserAgent
})

export default connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(ScraperUserAgentAddModal);