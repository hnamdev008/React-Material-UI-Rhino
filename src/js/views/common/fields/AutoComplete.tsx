import * as React from 'react';
import Ref from '../../../model/state/Ref';
import AutoComplete from 'material-ui/AutoComplete';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import Props from './CustomProps';
import FieldProps from './FieldProps';
import CircularProgress from 'material-ui/CircularProgress';

class LazyAutoComplete extends React.Component<{ 
    fetch(): Promise<any> }
    & Props 
    & FieldProps, 
    { fetching?: boolean, data?: Ref[] }> {

    constructor() {
        super();
        this.state = {
            fetching: false
        };
    }

    render() {
        return ( 
            <span>    
                <AutoComplete
                    hintText={ this.props.label }
                    dataSource={ this.state.data || [] }
                    dataSourceConfig={ { text: 'text', value: 'id'} }
                    filter={AutoComplete.fuzzyFilter}
                    floatingLabelText={ this.props.label }
                    maxSearchResults={ 10 } 
                    errorText={
                        this.props.meta.touched && this.props.meta.error }
                    onNewRequest={
                        (chosen: any) => {
                            this.props.input.onChange(chosen)
                        }
                    }
                    onUpdateInput={
                        (searchText: string, dataSource: Ref[]) => {
                            !dataSource.length
                            && this.doFetch();
                        }
                    }
                    searchText={
                        typeof this.props.input.value == 'string'
                        ? this.props.input.value
                        : this.props.input.value['text']     
                    }
                />
                {
                    this.state.fetching 
                    &&
                    <CircularProgress size={20} thickness={5} />
                }
            </span>
        )
    }

    private doFetch() {
        this.setState({
            fetching: true
        })

        this.props.fetch()
        .then(data => {
            this.setState({
                fetching: false,
                data: data
            })
        })
    }
}

export default LazyAutoComplete;

// typeof this.props.input.value == 'string'
// ? this.props.input.value
// : this.props.input.value['text'] 

// searchText={ (() => {
//                             const text = this.props.input.value['text'];
//                             if(text)
//                                 return text
//                             else {
//                                 const data = this.state.data;
//                                 if(data) {
//                                     const ref = data.filter(
//                                         datum => `${datum.id}` === this.props.input.value
//                                     )[0];

//                                     if(ref) return ref.text;
//                                 } 
//                             }

//                             return '';
//                         })()
//                     }