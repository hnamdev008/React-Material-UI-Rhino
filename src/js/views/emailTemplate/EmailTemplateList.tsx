import * as React from 'react';
import { Table } from '../components/common/table/Table';
import { Column } from '../components/common/table/Column';
import { ActionCol } from '../components/common/table/ActionCol';
import { Grid } from '../components/common/grid/Grid';
import EmailTemplateRecord from '../../model/state/emailTemplate/EmailTemplateRecord';
import { ViewType } from '../../model/state/CrudState';

class EmailTemplateList extends React.Component<Props, void> {
    public render() {

        if(!this.props.data) return null;

        return (
            this.props.view == 'table' 
            ?
            <Table data={this.props.data}>
                <Column head="Name" headKey="name" />
                <Column head="From Header" headKey="fromHeader" />
                <Column head="Subject Header" headKey="subjectHeader" />
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
    data: EmailTemplateRecord[];
}

export default EmailTemplateList;
  
