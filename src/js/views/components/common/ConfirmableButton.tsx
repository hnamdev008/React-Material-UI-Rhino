import * as React from 'react';

export class ConfirmableButton extends React.Component<Props, State> {
    constructor() {
        super();
        this.state = {
            prompt: false
        }
    }

    public render() {
        if(this.state.prompt) {
            return (
                <div className="btn-confirm-prompt">
                    <button onClick={this.props.onConfirm}>YES</button>
                    <button onClick={this.onNoClick}>NO</button>
                    <span>{this.props.value}?</span>
                </div>
            );
        } else {
            return (
                <button
                    onClick={this.onButtonClick}>
                        {this.props.value}
                </button>
            );
        }
    }

    private onButtonClick = () => {
        this.setState( { prompt: true });
    }

    private onNoClick = () => {
        this.setState( { prompt: false });
    }
}

interface Props {
    value: string
    // onButtonClick(): void
    // onNoClick(): void
    onConfirm(): void
}

interface State {
    prompt?: boolean
}