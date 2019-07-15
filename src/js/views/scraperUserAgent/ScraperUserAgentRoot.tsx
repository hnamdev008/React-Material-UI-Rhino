import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../model/state/AppState';
import ScraperUserAgentAction from '../../actions/ScraperUserAgentAction'
import ScraperUserAgentState from '../../model/state/scraperUserAgent/ScraperUserAgentState';
import ScraperUserAgentAddModal from './modals/ScraperUserAgentAddModal';
import ScraperUserAgentList from './ScraperUserAgentList';
import ScraperUserAgentEditModal from './modals/ScraperUserAgentEditModal';
import RootView from '../common/RootView';
import { ToolbarGroup } from 'material-ui/Toolbar';
import { GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import OpenInNew from 'material-ui/svg-icons/action/open-in-new';
import { Table } from '../components/common/table/Table';
import { Column } from '../components/common/table/Column';
import { ActionCol } from '../components/common/table/ActionCol';

class ScraperUserAgentRoot extends React.Component<Props, { addOpen: boolean, editOpen: boolean }> {
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
                <ActionCol edit delete 
                    editCallback={this.onEdit }/>
            </Table>
        
        return <div>
            <ScraperUserAgentEditModal />
            <ScraperUserAgentAddModal />
            <RootView
                title="ScraperUserAgents"
                onAdd={ this.onAdd }
                widgets={ null }
                onLoad={ this.onLoad }
                grids={grids}
                table={table} 
                records={this.props.state.records} />
        </div>
    }

    private onAdd = () => {
        ScraperUserAgentAction.openAdd(this.props.dispatch);
    }

    private onEdit = (id) => {
        ScraperUserAgentAction.openEdit(this.props.dispatch, id)
    }

    private onLoad = () => {
        ScraperUserAgentAction.initPage(this.props.dispatch);
    }   
}

interface Props {
    dispatch?: Function
    state?: ScraperUserAgentState;
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.scraperUserAgent
})

export default connect(
    mapStateToProps, 
    dispatch => ({
        dispatch
    })
)(ScraperUserAgentRoot);

  