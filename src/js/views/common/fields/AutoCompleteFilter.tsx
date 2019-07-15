import * as React from 'react';
import Ref from '../../../model/state/Ref';
import AutoComplete from 'material-ui/AutoComplete';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import Props from './CustomProps';
import FieldProps from './FieldProps';
import CircularProgress from 'material-ui/CircularProgress';

class AutoCompleteFilter extends React.Component<{ 
    fetch(): Promise<any> }
    & Props
    & { onSelect?(id: number) },
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
                {
                    this.state.fetching 
                    &&
                    <CircularProgress size={20} thickness={5} />
                }    
                <AutoComplete
                    hintText={ this.props.label }
                    dataSource={ this.state.data || [] }
                    dataSourceConfig={ { text: 'text', value: 'id'} }
                    filter={AutoComplete.fuzzyFilter}
                    maxSearchResults={ 10 } 
                    onNewRequest={
                        (chosen: any) => {
                            this.props.onSelect(chosen);
                        }
                    }
                    onUpdateInput={
                        (searchText: string, dataSource: Ref[]) => {
                            !dataSource.length
                            && this.doFetch();
                        }
                    }
                />
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

export default AutoCompleteFilter;