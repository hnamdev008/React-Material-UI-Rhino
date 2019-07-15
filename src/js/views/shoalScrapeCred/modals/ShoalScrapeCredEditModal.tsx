import * as React from 'react';
import { connect } from 'react-redux';
import { EditModalContainer, Props} from '../../common/EditModalContainer';
import ShoalScrapeCredAction from '../../../actions/ShoalScrapeCredAction'
import ShoalScrapeCredState from '../../../model/state/shoalScrapeCred/ShoalScrapeCredState';
import ShoalScrapeCredForm from '../ShoalScrapeCredForm';
import { AppState } from '../../../model/state/AppState';

const ShoalScrapeCredEditModal = (props: Props) => {
    return <EditModalContainer
        title="Edit ShoalScrape Credential"
        action={ ShoalScrapeCredAction }
        {...props}>
            <ShoalScrapeCredForm />
    </EditModalContainer>
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.shoalScrapeCred
})

export default connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(ShoalScrapeCredEditModal);
