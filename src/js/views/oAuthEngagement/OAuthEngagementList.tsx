import * as React from 'react';
import { Table } from '../components/common/table/Table';
import { Column } from '../components/common/table/Column';
import { ActionCol } from '../components/common/table/ActionCol';
import { Grid } from '../components/common/grid/Grid';
import OAuthEngagementRecord from '../../model/state/oAuthEngagement/OAuthEngagementRecord';
import { ViewType } from '../../model/state/CrudState';

class OAuthEngagementList extends React.Component<Props, void> {
    public render() {

        if(!this.props.data) return null;

        return (
            this.props.view == 'table' 
            ?
            <Table data={this.props.data}>
                <Column head="State" headKey="state" />
                <Column head="Title" headKey="name" />
                <Column head="Description" headKey="description" />
                <Column head="Campaign" headKey="campaign" dependee />
                <Column head="OAuth Consumer" headKey="oAuthConsumer" dependee />
                <ActionCol edit delete 
                    editCallback={this.props.onOpen}/>
            </Table>
            :
            <Grid 
                data={this.props.data} 
                label={ (datum) => {
                    return `${datum['name']}`;
                } }
                openCb={this.props.onOpen}/> 
        );
    } 
}

interface Props {
    onOpen(id: number): void
    view: ViewType
    data: OAuthEngagementRecord[];
}

export default OAuthEngagementList;
  
