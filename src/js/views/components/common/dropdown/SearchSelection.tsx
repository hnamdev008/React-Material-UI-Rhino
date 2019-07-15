declare const $: any;

import * as React from 'react';

//Depends on Semantic dropdown and transition js/css includes
export class SearchSelection extends React.Component<Props, {}> {
    public render() {
        const els = this.props.data && this.props.data.map(datum => {
            return (
                <option
                    key={datum.text}
                    value={datum.value || datum.text}>
                        {datum.text}
                </option>
            );
        });

        els.unshift(
            <option
                key={this.props.placeholder || ''}
                value={null}>
                    {this.props.placeholder || ''}
            </option>
        )

        return (
            <select onChange={ this.onSelect } 
                className="ui search dropdown">
                    { els }
            </select>
        );
    }

    private onSelect = (event) => {
        if(event.target.value)
            this.props.onSelect(event.target.value)
    }

    public componentDidMount() {
        $('.ui.dropdown')
            .dropdown();
    }  
}

interface Props {
    placeholder?: string
    data: Array<{ text: string, value?: string }>
    onSelect(selection: string): void
}
