declare const CKEDITOR: any;

import * as React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class TextEditor extends React.Component<{ 
    data: any, 
    open: boolean, 
    onOk(raw: string): void, 
    onCancel(): void,
    fetch(): void
}, {}> {
    public render() {
        return (
            <Dialog
                actions={[
                    <FlatButton
                        label="Cancel"
                        primary={true}
                        onTouchTap={this.props.onCancel}/>,
                    <FlatButton
                        label="OK"
                        primary={true}
                        onTouchTap={ () => { this.props.onOk(CKEDITOR.instances.editor1.getData()) } }/>,
                ]}
                style={ { paddingTop: 0} }
                repositionOnUpdate={false}
                contentStyle={ 
                    { 
                        width: '95%',
                        maxWidth: 'none' 
                    } 
                }
                open={ !!this.props.open }  > 
                    <textarea style={ { display: 'none' } } id="editor1" name="editor1"></textarea>
            </Dialog>
        );
    }

    public componentDidUpdate(nextProps) {
        if(!CKEDITOR.instances.editor1)
            setTimeout(() => { 
                this.props.open && this.replace() 
            }, 1000);
    }

    private replace() {
        CKEDITOR.replace( 'editor1' );

        if(this.props.data) {
            
            CKEDITOR.instances.editor1.setData( this.props.data, function(){
                this.checkDirty();  // true
            });
        }
    }
}

// declare const $: any;

// class TextEditor extends React.Component<{ data: any, open: boolean }, void> {
//     public render() {
//         let modal: React.ReactElement<{ data: any, open: boolean }> = null;
//         if(this.props.open) {

//             return (
//                 <div 
//                     className="modal fade" 
//                     id="modal" 
//                     tabIndex="-1" 
//                     role="dialog"
//                     data-keyboard="false" 
//                     data-backdrop="static">
//                         <div className="modal-dialog" role="document">
//                             <div className="modal-content">
//                                 <div className="modal-header">
//                                     <h3 className="modal-title">ckeditor</h3>
//                                 </div>
//                                 <div className="modal-body">
//                                     <textarea id="editor1" name="editor1"></textarea>
//                                 </div>
//                             </div>
//                         </div>
//                 </div>
//             );
//         }
//         else {
//             $('#modal').modal('hide');
//             return null;
//         }
//     }

//     public componentDidUpdate() {
//         if(this.props.open)
//             $('#modal').modal('show');
//     }

//     public componentDidMount() {
//         if(this.props.open) this.replace();
//     }

//     public shouldComponentUpdate(nextProps) {
//         return !nextProps.open;
//     }

//     public componentWillUpdate() {
//         this.replace();
//     }

//     private replace() {
//         CKEDITOR.replace( 'editor1' );

//         if(this.props.data)
//             CKEDITOR.instances.editor1.setData( this.props.data, function(){
//                 this.checkDirty();  // true
//         });
//     }
// }   

export default TextEditor;
