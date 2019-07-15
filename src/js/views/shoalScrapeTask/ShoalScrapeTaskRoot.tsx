import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../model/state/AppState';
import ShoalScrapeTaskAction from '../../actions/ShoalScrapeTaskAction'
import ShoalScrapeTaskState from '../../model/state/shoalScrapeTask/ShoalScrapeTaskState';
import ShoalScrapeTaskAddModal from './modals/ShoalScrapeTaskAddModal';
import ShoalScrapeTaskList from './ShoalScrapeTaskList';
import ShoalScrapeTaskEditModal from './modals/ShoalScrapeTaskEditModal';
import RootView from '../common/RootView';
import { ToolbarGroup } from 'material-ui/Toolbar';
import { GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import OpenInNew from 'material-ui/svg-icons/action/open-in-new';
import { Table } from '../components/common/table/Table';
import { Column } from '../components/common/table/Column';
import { ActionCol } from '../components/common/table/ActionCol';

class ShoalScrapeTaskRoot extends React.Component<Props, { addOpen: boolean, editOpen: boolean }> {
    public render() {
        const grids = this.props.state.records
        && this.props.state.records.map(record => {
            return (
                <GridTile
                    key={ record.id }
                    title={ record.domain }
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
                <Column head="State" headKey="state" />
                <Column head="Company" headKey="company" />
                <Column head="Domain" headKey="domain" />
                <Column head="Last Started" headKey="lastStartedAt" />
                <ActionCol edit delete 
                    editCallback={this.onEdit }/>
            </Table>
        
        return <div>
            <ShoalScrapeTaskEditModal />
            <ShoalScrapeTaskAddModal />
            <RootView
                title="ShoalScrapeTasks"
                onAdd={ this.onAdd }
                widgets={ null }
                onLoad={ this.onLoad }
                grids={grids}
                table={table} 
                records={this.props.state.records} />
        </div>
    }

    private onAdd = () => {
        ShoalScrapeTaskAction.openAdd(this.props.dispatch);
    }

    private onEdit = (id) => {
        ShoalScrapeTaskAction.openEdit(this.props.dispatch, id)
    }

    private onLoad = () => {
        ShoalScrapeTaskAction.initPage(this.props.dispatch);
    }   
}

interface Props {
    dispatch?: Function
    state?: ShoalScrapeTaskState;
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.shoalScrapeTask
})

export default connect(
    mapStateToProps, 
    dispatch => ({
        dispatch
    })
)(ShoalScrapeTaskRoot);

  