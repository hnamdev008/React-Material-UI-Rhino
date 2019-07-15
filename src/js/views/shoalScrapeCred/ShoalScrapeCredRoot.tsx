import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../model/state/AppState';
import ShoalScrapeCredAction from '../../actions/ShoalScrapeCredAction'
import ShoalScrapeCredState from '../../model/state/shoalScrapeCred/ShoalScrapeCredState';
import ShoalScrapeCredAddModal from './modals/ShoalScrapeCredAddModal';
import ShoalScrapeCredList from './ShoalScrapeCredList';
import ShoalScrapeCredEditModal from './modals/ShoalScrapeCredEditModal';
import RootView from '../common/RootView';
import { ToolbarGroup } from 'material-ui/Toolbar';
import { GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import OpenInNew from 'material-ui/svg-icons/action/open-in-new';
import { Table } from '../components/common/table/Table';
import { Column } from '../components/common/table/Column';
import { ActionCol } from '../components/common/table/ActionCol';

class ShoalScrapeCredRoot extends React.Component<Props, { addOpen: boolean, editOpen: boolean }> {
    public render() {
        const grids = this.props.state.records
        && this.props.state.records.map(record => {
            return (
                <GridTile
                    key={ record.id }
                    title={ record.name }
                    style={ { backgroundColor: 'rgba(51, 51, 61, .7)' } }
                    titlePosition="bottom">
                        <IconButton
                            onTouchTap={ () => { this.onEdit(record.id) } }>
                            <OpenInNew color="white" />
                        </IconButton>
                </GridTile>
            );
        })

        const table = <Table data={this.props.state.records}>
                <Column head="Name" headKey="name" />
                <Column head="Username" headKey="username" />
                <Column head="Password" headKey="password" />
                <Column head="Scraper User-Agent" headKey="scraperUserAgent" dependee />
                <ActionCol edit delete 
                    editCallback={this.onEdit }/>
            </Table>
        
        return <div>
            <ShoalScrapeCredEditModal />
            <ShoalScrapeCredAddModal />
            <RootView
                title="ShoalScrapeCreds"
                onAdd={ this.onAdd }
                widgets={ null }
                onLoad={ this.onLoad }
                grids={grids}
                table={table} 
                records={this.props.state.records} />
        </div>
    }

    private onAdd = () => {
        ShoalScrapeCredAction.openAdd(this.props.dispatch);
    }

    private onEdit = (id) => {
        ShoalScrapeCredAction.openEdit(this.props.dispatch, id)
    }

    private onLoad = () => {
        ShoalScrapeCredAction.initPage(this.props.dispatch);
    }   
}

interface Props {
    dispatch?: Function
    state?: ShoalScrapeCredState;
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.shoalScrapeCred
})

export default connect(
    mapStateToProps, 
    dispatch => ({
        dispatch
    })
)(ShoalScrapeCredRoot);

  