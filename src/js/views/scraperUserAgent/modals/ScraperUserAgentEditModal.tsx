import * as React from 'react';
import { connect } from 'react-redux';
import { EditModalContainer, Props} from '../../common/EditModalContainer';
import ScraperUserAgentAction from '../../../actions/ScraperUserAgentAction'
import ScraperUserAgentState from '../../../model/state/scraperUserAgent/ScraperUserAgentState';
import ScraperUserAgentForm from '../ScraperUserAgentForm';
import { AppState } from '../../../model/state/AppState';

const ScraperUserAgentEditModal = (props: Props) => {
    return <EditModalContainer
        title="Edit Scraper User Agent"
        action={ ScraperUserAgentAction }
        {...props}>
            <ScraperUserAgentForm />
    </EditModalContainer>
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.scraperUserAgent
})

export default connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(ScraperUserAgentEditModal);
