import * as React from 'react';
import { connect } from 'react-redux';
import ShoalScrapeCredRecord from '../../model/state/shoalScrapeCred/ShoalScrapeCredRecord';
import ShoalScrapeCredWidget from '../../model/state/shoalScrapeCred/ShoalScrapeCredWidget';
import Ref from '../../model/state/Ref';
const reduxForm = require('redux-form');
const Field = reduxForm.Field;
import ShoalScrapeCredAction from '../../actions/ShoalScrapeCredAction'
import select from '../common/fields/Select';
import autoComplete from '../common/fields/AutoComplete';
import input from '../common/fields/Input';
import textArea from '../common/fields/TextArea';
import editor from '../common/fields/TextEditor';
import Submit from '../common/SubmitButton';
import MenuItem from 'material-ui/MenuItem';
import FormProps from '../common/FormProps';
import { AppState } from '../../model/state/AppState';
import IconButton from 'material-ui/IconButton';
import ErrAlert from '../common/ErrorAlert';

const FORM = 'ShoalScrapeCredForm'

let shoalScrapeCredForm = reduxForm.reduxForm({
    form: FORM
})(
(props: FormProps 
    & { widget: ShoalScrapeCredWidget }
    & { record: ShoalScrapeCredRecord } ) => {         
        return <form 
            onSubmit={ props.handleSubmit(props.submit) }>
                <ErrAlert errorMsg={ props.error } />

                <div>
                    <Field
                        name="name"
                        label="Name"
                        component={ input } />
                </div>
                <div>
                    <Field
                        name="username"
                        label="Username"
                        component={ input } />
                </div>
                <div>
                    <Field
                        name="password"
                        label="Password"
                        component={ input } />
                </div>
                <div>
                    <Field
                        name="scraperUserAgent"
                        label="Scraper user-agent"
                        data={ props.record.scraperUserAgent }
                        asyncSrc={ ShoalScrapeCredAction.getScraperUserAgentSuggestions }
                        component={ autoComplete } /> 
                </div>

                <Submit />
        </form>
});

export default connect(
    (state: AppState) => {    
        return {
            initialValues: state.shoalScrapeCred.selectedRecord,
            record: state.shoalScrapeCred.selectedRecord    
        }
    }
)(shoalScrapeCredForm);

