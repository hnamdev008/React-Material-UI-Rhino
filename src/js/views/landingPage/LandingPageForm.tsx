import * as React from 'react';
import { connect } from 'react-redux';
import LandingPageRecord from '../../model/state/landingPage/LandingPageRecord';
import LandingPageWidget from '../../model/state/landingPage/LandingPageWidget';
import Ref from '../../model/state/Ref';
const reduxForm = require('redux-form');
const Field = reduxForm.Field;
import LandingPageAction from '../../actions/LandingPageAction'
import select from '../common/fields/Select';
import autoComplete from '../common/fields/AutoComplete';
import input from '../common/fields/Input';
import editor from '../common/fields/TextEditor2';
import Submit from '../common/SubmitButton';
import MenuItem from 'material-ui/MenuItem';
import FormProps from '../common/FormProps';
import { AppState } from '../../model/state/AppState';
import IconButton from 'material-ui/IconButton';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import FetchAction from '../../actions/FetchAction'
import ErrAlert from '../common/ErrorAlert';

const FORM = 'LandingPageFormAdd'

let landingPageForm = reduxForm.reduxForm({
    form: FORM
})(
(props: FormProps 
    & { widget: LandingPageWidget } 
    & { record: LandingPageRecord } 
    & { pageTypeValue: 'url' | 'manual' | 'page'}) => { 
        const isScrapedPage = props.pageTypeValue && props.pageTypeValue == 'page';
        
        return <form 
            onSubmit={ props.handleSubmit(props.submit) }>
                <ErrAlert errorMsg={ props.error } />

                <div>
                    <Field
                        initValue={ props.record.pageType }
                        name="pageType"
                        label="Type"
                        component={ select }>
                            <MenuItem value={'manual'} primaryText="Manual" />
                            <MenuItem value={'page'} primaryText="Scraped Page" />
                            { props.record.isRedirectPage 
                                && <MenuItem value={'url'} primaryText="URL" /> }
                    </Field>
                </div>
                { isScrapedPage
                    &&
                    <div>
                        <Field
                            name="scraperUserAgent"
                            label="Scraper User Agent"
                            fetch={ FetchAction.getScraperUserAgentSuggestions }
                            component={ autoComplete } /> 
                    </div> 
                }
                <div> 
                    <Field
                        name="name"
                        label="Title"
                        component={ input }  />
                </div>
                { isScrapedPage
                    &&
                    <div> 
                        <Field
                            name="url"
                            label="URL"
                            component={ input }  />
                    </div>
                }
                { !isScrapedPage
                    &&
                    <div className="text-area">
                        <Field
                            fetch={ () => {
                                
                                return props.record.path
                                ?
                                LandingPageAction.getTemplate(props.record.path)
                                :
                                Promise.resolve("");
                            } }
                            name="template"
                            label="Template"
                            component={ editor } />
                    </div>
                }

                <Submit />
        </form>
});

//fetch={ LandingPageAction.get }

const selector = reduxForm.formValueSelector(FORM)
//http://redux-form.com/6.0.0-alpha.11/examples/selectingFormValues/
export default connect(
  (state: AppState) => {
    const pageTypeValue = selector(state, 'pageType')
    return {
      pageTypeValue,
      initialValues: state.landingPage.selectedRecord,
      record: state.landingPage.selectedRecord,
      widget: state.landingPage.widgetState
    }
  }
)(landingPageForm)

