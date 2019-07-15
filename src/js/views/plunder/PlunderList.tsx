import * as React from 'react';
import { Table } from '../components/common/table/Table';
import { Column } from '../components/common/table/Column';
import { ActionCol } from '../components/common/table/ActionCol';
import { Grid } from '../components/common/grid/Grid';
import PlunderRecord from '../../model/state/plunder/PlunderRecord';
import { ViewType } from '../../model/state/CrudState';

class PlunderList extends React.Component<Props, void> {
    public render() {

        if(!this.props.data) return null;

        return (
            this.props.view == 'table' 
            ?
            <Table data={this.props.data}>
                <Column head="OAuth Result" headKey="oAuthResult" dependee/>
                <Column head="Filename" headKey="filename" />
                <Column head="MIME Type" headKey="mimetype" />
                <Column head="Last Modified" headKey="lastModified" />
                <ActionCol edit delete 
                    editCallback={this.props.onOpen}/>
            </Table>
            :
            <Grid 
                data={this.props.data} 
                label={ (datum) => {
                    return `${datum['oAuthResult'].text}`;
                } }
                openCb={this.props.onOpen}/> 
        );
    } 
}

interface Props {
    onOpen(id: number): void
    view: ViewType
    data: PlunderRecord[];
}

export default PlunderList;
  
