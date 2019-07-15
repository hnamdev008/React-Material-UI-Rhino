import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../model/state/AppState';
import OAuthResultAction from '../../actions/OAuthResultAction'
import OAuthResultState from '../../model/state/oAuthResult/OAuthResultState';
import OAuthResultList from './OAuthResultList';
import OAuthResultEditModal from './modals/OAuthResultEditModal';
import RootView from '../common/RootView';
import { GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import OpenInNew from 'material-ui/svg-icons/action/open-in-new';
import { Table } from '../components/common/table/Table';
import { Column } from '../components/common/table/Column';
import { ActionCol } from '../components/common/table/ActionCol';

class OAuthResultRoot extends React.Component<Props, { addOpen: boolean, editOpen: boolean }> {
    public render() {
        const grids = this.props.state.records
        && this.props.state.records.map(record => {
            return (
                <GridTile
                    key={ record.id }
                    title={ record.email }
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
                <Column head="Authorized Email" headKey="email" />
                <Column head="Target" headKey="target" dependee />
                <Column head="Engagement" headKey="oAuthEngagement" dependee />
                <ActionCol edit delete 
                    editCallback={this.onEdit}/>
            </Table>
        
        return <div>
            <OAuthResultEditModal />
            <RootView
                title="OAuth Results"
                onAdd= {null}
                widgets={ null }
                onLoad={ this.onLoad }
                grids={grids}
                table={table} 
                records={this.props.state.records} />
        </div>
    }

    private onAdd = () => {
        OAuthResultAction.openAdd(this.props.dispatch);
    }

    private onEdit = (id) => {
        OAuthResultAction.openEdit(this.props.dispatch, id)
    }

    private onLoad = () => {
        OAuthResultAction.initPage(this.props.dispatch)
    }   
}

interface Props {
    dispatch?: Function
    state?: OAuthResultState;
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.oAuthResult
})

export default connect(
    mapStateToProps, 
    dispatch => ({
        dispatch
    })
)(OAuthResultRoot);

