import * as React from 'react';
import { connect } from 'react-redux';
import { AddModalContainer, Props } from '../../common/AddModalContainer';
import ShoalScrapeCredAction from '../../../actions/ShoalScrapeCredAction'
import ShoalScrapeCredState from '../../../model/state/shoalScrapeCred/ShoalScrapeCredState';
import ShoalScrapeCredForm from '../ShoalScrapeCredForm';
import { AppState } from '../../../model/state/AppState';

const ShoalScrapeCredAddModal = (props: Props) => 
    <AddModalContainer
        title="New ShoalScrape Credential"
        action={ ShoalScrapeCredAction }
        {...props}>
            <ShoalScrapeCredForm {...props}/>
    </AddModalContainer>

const mapStateToProps = (app: AppState): Props => ({
    state: app.shoalScrapeCred
})

export default connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(ShoalScrapeCredAddModal);