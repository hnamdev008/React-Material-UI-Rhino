import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../model/state/AppState';
import { load } from '../../ducks/VectorEmail'
import VectorEmailState from '../../model/state/vectorEmail/VectorEmailState';
import RootView from '../common/RootView';
import { ToolbarGroup } from 'material-ui/Toolbar';
import { GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import OpenInNew from 'material-ui/svg-icons/action/open-in-new';
import { Table } from '../components/common/table/Table';
import { Column } from '../components/common/table/Column';
import { ActionCol } from '../components/common/table/ActionCol';

class VectorEmailRoot extends React.Component<Props, { addOpen: boolean, editOpen: boolean }> {
    public render() {
        const grids = this.props.state.records
        && this.props.state.records.map(record => {
            return (
                <GridTile
                    key={ record.id }
                    title={ record.campaign }
                    style={ { backgroundColor: 'rgba(51, 51, 61, .7)' } }
                    titlePosition="bottom">
                        
                </GridTile>
            );
        })

        const table = <Table data={this.props.state.records}>
                <Column head="State" headKey="state" />
                <Column head="Client" headKey="client" />
                <Column head="Campaign" headKey="campaign" />
                <Column head="Engagement" headKey="engagement" />
                <Column head="Target" headKey="target" />
                <Column head="Target List" headKey="targetList" />
                <Column head="Schedule Sending" headKey="scheduleSending" />
                <Column head="Target Timezone" headKey="targetTimezone" />
                <ActionCol edit delete 
                    editCallback={ null }/>
            </Table>
        
        return <div>
            <RootView
                title="Email Log"
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
    state?: VectorEmailState;
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.vectorEmail
})

export default connect(
    mapStateToProps, 
    dispatch => ({
        dispatch
    })
)(VectorEmailRoot);

  