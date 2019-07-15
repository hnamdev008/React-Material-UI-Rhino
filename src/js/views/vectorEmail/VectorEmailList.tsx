// import * as React from 'react';
// import { Table } from '../components/common/table/Table';
// import { Column } from '../components/common/table/Column';
// import { ActionCol } from '../components/common/table/ActionCol';
// import { Grid } from '../components/common/grid/Grid';
// import VectorEmailRecord from '../../model/state/vectorEmail/VectorEmailRecord';
// import { ViewType } from '../../model/state/CrudState';

// class VectorEmailList extends React.Component<Props, void> {
//     public render() {

//         if(!this.props.data) return null;

//         return (
//             this.props.view == 'table' 
//             ?
//             <Table data={this.props.data}>
//                 <Column head="Authorized Email" headKey="email" />
//                 <Column head="Target" headKey="target" dependee />
//                 <Column head="Engagement" headKey="engagement" dependee />
//                 <ActionCol edit delete 
//                     editCallback={this.props.onOpen}/>
//             </Table>
//             :
//             <Grid 
//                 data={this.props.data} 
//                 label={ (datum) => {
//                     return `${datum['email']}`;
//                 } }
//                 openCb={this.props.onOpen}/> 
//         );
//     } 
// }

// interface Props {
//     onOpen(id: number): void
//     view: ViewType
//     data: VectorEmailRecord[];
// }

// export default VectorEmailList;
  
