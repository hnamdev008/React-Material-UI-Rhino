declare const $: any;

import * as React from 'react';
import { sift } from './Controls';
import Dialog from 'material-ui/Dialog';

interface EditModalProps {
    title: string
    visible?: boolean
}

export class Modal extends React.Component<EditModalProps, void> {
    public render() {
        if(this.props.visible) {
            const sifted = sift(this.props.children);

            return (
                <div>
                    <Dialog
                        title={ this.props.title }
                        actions={ <ul className="dialog-context">{ sifted.controls }</ul> }
                        modal={ true }
                        open={ this.props.visible }
                        contentClassName="dialog-content"
                        bodyClassName="dialog-body"
                        actionsContainerClassName="dialog-actions"
                        contentStyle={ 
                            { 
                                marginLeft: '70px' 
                            } 
                        }
                        autoScrollBodyContent={ true }>
                            { sifted.others }
                    </Dialog>
                </div>
            );
        }
        else {
            $('#modal').modal('hide');
            return null;
        }
    }

    public componentDidUpdate() {
        if(this.props.visible)
            $('#modal').modal('show');
    }
}   
