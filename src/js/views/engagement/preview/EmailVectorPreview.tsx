import * as React from 'react';
import EngagementAction from '../../../actions/EngagementAction';
import CircularProgress from 'material-ui/CircularProgress';
import PreviewProps from './PreviewProps';

const emailVectorPreview = (props: PreviewProps) => {
        return (
            props.html
            ?
            <iframe srcDoc={props.html} frameBorder="0"></iframe>
            :
            <CircularProgress size={80} thickness={7} />
            
        )
}

export default emailVectorPreview;
