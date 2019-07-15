declare const CKEDITOR: any;

import * as React from 'react';

class TextEditor extends React.Component<{ data: any }, {}> {
    public render() {
        return <textarea id="editor1" name="editor1"></textarea>
    }

    public componentDidMount() {
        
        CKEDITOR.replace( 'editor1' );

        if(this.props.data)
        CKEDITOR.instances.editor1.setData( this.props.data, function(){
            this.checkDirty();  // true
        });
    }

    public shouldComponentUpdate() {
        return false;
    }
}

export default TextEditor;