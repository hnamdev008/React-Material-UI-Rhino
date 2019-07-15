import * as React from 'react';
import { Control } from '../../components/common/Controls';
import ScheduleAction from '../../../actions/ScheduleAction'
import EmailTemplateAction from '../../../actions/EmailTemplateAction'
import EmailServerAction from '../../../actions/EmailServerAction'
import LandingPageAction from '../../../actions/LandingPageAction';
import RedirectPageAction from '../../../actions/RedirectPageAction';
import EngagementAction from '../../../actions/EngagementAction';
 
 const renderEngagementControls = (props) => [
     <Control>
        <button onClick={ () => ScheduleAction.openAdd(props.dispatch) }>
            <span className="glyphicon glyphicon-plus"></span>
            SCHEDULE
        </button>
    </Control>,
    <Control>
        <button onClick={ () => EmailTemplateAction.openAdd(props.dispatch) }>
            <span className="glyphicon glyphicon-plus"></span>
            TEMPLATE
        </button>
    </Control>,
    <Control>
        <button onClick={ () => EmailServerAction.openAdd(props.dispatch) }>
            <span className="glyphicon glyphicon-plus"></span>
            EMAIL SERVER
        </button>
    </Control>,
    <Control>
        <button onClick={ () => LandingPageAction.openAdd(props.dispatch) }>
            <span className="glyphicon glyphicon-plus"></span>
            LANDING PAGE
        </button>
    </Control>,
    <Control>
        <button onClick={ () => RedirectPageAction.openAdd(props.dispatch) }>
            <span className="glyphicon glyphicon-plus"></span>
            REDIRECT PAGE
        </button>
    </Control>
 ]

 export default renderEngagementControls;
 