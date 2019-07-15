declare const CKEDITOR: any;

import * as React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import CircularProgress from 'material-ui/CircularProgress';
import Props from './CustomProps';
import FieldProps from './FieldProps';

class TextEditor extends React.Component<
Props & FieldProps & { 
    fetch(): Promise<any>
}, { open?: boolean, fetching?: boolean, data?: string }> {
    constructor() {
        super();
        this.state = {
            fetching: true, 
            open: false 
        };
    }

    public render() {
        return (
            <div>
            <div className="thumbnail-container">
                {
                    this.state.fetching
                    ?
                    <CircularProgress size={80} thickness={7} />
                    :
                    <div className="thumbnail">
                        <iframe srcDoc={this.state.data} frameBorder="0"></iframe>
                    </div>
                }
            </div>
                        
            <div>
                <IconButton onTouchTap={ () => this.setState({open: true}) }>
                    <ModeEdit />
                </IconButton>
            </div>

            <Dialog
                actions={[
                    <FlatButton
                        label="Cancel"
                        primary={true}
                        onTouchTap={() => { CKEDITOR.instances.editor1.destroy(); this.setState({open: false}) } }/>,
                    <FlatButton
                        label="OK"
                        primary={true}
                        onTouchTap={ () => { this.props.input.onChange(CKEDITOR.instances.editor1.getData()); CKEDITOR.instances.editor1.destroy() } } />,
                ]}
                style={ { paddingTop: 0} }
                repositionOnUpdate={false}
                contentStyle={ 
                    { 
                        width: '95%',
                        maxWidth: 'none' 
                    } 
                }
                open={ !!this.state.open }  > 
                    <textarea style={ { display: 'none' } } id="editor1" name="editor1"></textarea>
            </Dialog>
            </div>
        );
    }

    public componentDidMount() {
        this.props.fetch()
        .then(data => {
            this.setState({
                data: data,
                fetching: false    
            })
        })
    }

    public componentDidUpdate(nextProps) {
        if(!CKEDITOR.instances.editor1)
            setTimeout(() => { 
                this.state.open && this.replace() 
            }, 1000);
    }

    private replace() {
        CKEDITOR.replace( 'editor1', {
            allowedContent: true
        } );
        if(this.state.data) {
            CKEDITOR.instances.editor1.setData( this.state.data, function(){
                this.checkDirty();  // true
            });
        }
    }
}

export default TextEditor;
