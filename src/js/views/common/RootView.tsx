import * as React from 'react';
import * as react_redux from 'react-redux';
import {
    Card, 
    CardActions, 
    CardHeader, 
    CardText,
    CardMedia } from 'material-ui/Card';
import {
    GridList, 
    GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import OpenInNew from 'material-ui/svg-icons/action/open-in-new';
import ViewModule from 'material-ui/svg-icons/action/view-module';
import ViewList from 'material-ui/svg-icons/action/view-list';
import NoteAdd from 'material-ui/svg-icons/action/note-add';
import FilterList from 'material-ui/svg-icons/content/filter-list';
import EngagementAction from '../../actions/EngagementAction';
import { connect } from 'react-redux';
import { AppState } from '../../model/state/AppState';
import Ref from '../../model/state/Ref';
import {
    Toolbar, 
    ToolbarGroup, 
    ToolbarSeparator,
    ToolbarTitle } from 'material-ui/Toolbar';
import AutoCompleteFilter from '../common/fields/AutoCompleteFilter'
import FlatButton from 'material-ui/FlatButton';
import { Table } from '../components/common/table/Table';
import { Column } from '../components/common/table/Column';
import { ActionCol } from '../components/common/table/ActionCol';
import CircularProgress from 'material-ui/CircularProgress';

const cardHeaderStyle = {
    titleStyle: {
        fontSize: 25
    },
    style: {
        backgroundColor: '#D74037',
        textAlign: 'left'
    }
}

const gridListStyles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    gridList: {
        padding: 20
    }
}

interface Props {
    title: string
    onAdd(): void
    onLoad(): void
    widgets: any
    grids: GridList
    table: any
    records: any[];
}

abstract class RootView extends React.Component<Props, { view: 'grid' | 'table', expanded: boolean }> {
    constructor(props) {
        super(props);
        this.props.onLoad();
        this.state = {
            view: 'table',
            expanded: true
        }
    }

    public render() {
        return <Card
            style={ { backgroundColor: 'rgba(28,28,38, .6)' } }
            expanded={ this.state.expanded }
            onExpandChange={ this.onExpandChange } >
                <CardHeader
                    title={this.props.title}
                    { ...cardHeaderStyle }
                    actAsExpander={true}
                    showExpandableButton={true} />
                <CardActions
                    style={ { padding: 0 } }
                >
                    <Toolbar
                            style={ { backgroundColor: 'rgb(28,28,38)', paddingLeft: 10, paddingRight: 10, margin: 0 } }
                        >
                            <ToolbarGroup
                                firstChild={true}
                            >
                                { this.props.onAdd &&
                                <FlatButton 
                                    label="Add" 
                                    icon={ <NoteAdd /> }
                                    onTouchTap={ this.props.onAdd }/>
                                } 
                            </ToolbarGroup>
                            {
                                this.state.expanded
                                &&
                                 <ToolbarGroup>
                                    { this.props.widgets }
                                    <ToolbarSeparator />
                                    <IconButton
                                        tooltip="Toggle view"
                                        onTouchTap={ this.onToggleView }
                                    >
                                        { 
                                            this.state.view == 'grid'
                                            ?
                                            <ViewList />
                                            :
                                            <ViewModule />
                                        }
                                    </IconButton>
                                </ToolbarGroup>
                            }
                        </Toolbar>                 
                </CardActions>
                <CardMedia
                    expandable={true}
                    style={ { padding: 20 } }>
                        {
                            this.props.records && this.props.records.length > 0
                            ?
                            (
                                this.state.view == 'grid'
                                ?
                                <GridList
                                    cols={5}
                                    cellHeight={100}>
                                        { this.props.grids }
                                </GridList>
                                :
                                this.props.table
                            )
                            :
                        <div style={{ textAlign: 'center' }}>
                            <CircularProgress size={120} thickness={10} />
                        </div>
                        }
                </CardMedia>
            </Card>
    }

    private onToggleView = () => {
        this.setState({
            view: this.state.view == 'table' ? 'grid' : 'table',
            expanded: this.state.expanded
        });
    }

    private onExpandChange = (expanded: boolean) => {
        this.setState({
            view: this.state.view,
            expanded: expanded
        });
    }
}

export default RootView;