import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../model/state/AppState';
import { load } from '../../ducks/ResultEvent'
import ResultEventState from '../../model/state/resultEvent/ResultEventState';
import RootView from '../common/RootView';
import { ToolbarGroup } from 'material-ui/Toolbar';
import { GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import OpenInNew from 'material-ui/svg-icons/action/open-in-new';
import { Table } from '../components/common/table/Table';
import { Column } from '../components/common/table/Column';
import { ActionCol } from '../components/common/table/ActionCol';

class ResultEventRoot extends React.Component<Props, { addOpen: boolean, editOpen: boolean }> {
    public render() {
        const grids = this.props.state.records
        && this.props.state.records.map(record => {
            return (
                <GridTile
                    key={ record.id }
                    title={ record.ip }
                    style={ { backgroundColor: 'rgba(51, 51, 61, .7)' } }
                    titlePosition="bottom">
                        
                </GridTile>
            );
        })

        const table = <Table data={this.props.state.records}>
                <Column head="Target List" headKey="firstname" />
                <Column head="Email" headKey="client" />
                <Column head="First Name" headKey="firstname" />
                <Column head="Last Name" headKey="client" />
                <Column head="Event Type" headKey="eventType" />
                <Column head="Time" headKey="timestamp" />
                <Column head="User Agent" headKey="userAgent" />
                <Column head="IP" headKey="ip" />
                <Column head="Login" headKey="login" />
                <Column head="Password" headKey="password" />
                <Column head="Form Data" headKey="rawData" />
                <ActionCol edit delete 
                    editCallback={ null }/>
            </Table>
        
        return <div>
            <RootView
                title="Results"
                onAdd={ null }
                widgets={ null }
                onLoad={ this.onLoad }
                grids={grids}
                table={table} 
                records={this.props.state.records} />
        </div>
    }

    private onLoad = () => {
        this.props.dispatch(load());
    }   
}

interface Props {
    dispatch?: Function
    state?: ResultEventState;
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.resultEvent
})

export default connect(
    mapStateToProps, 
    dispatch => ({
        dispatch
    })
)(ResultEventRoot);

  