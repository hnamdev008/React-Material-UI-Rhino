declare const $: any;

import * as React from 'react';
import { sift } from './Controls';

interface EditModalProps {
    title: string
    visible?: boolean
}

export class Modal extends React.Component<EditModalProps, void> {
    public render() {
        let modal: React.ReactElement<EditModalProps> = null;
        if(this.props.visible) {
            const sifted = sift(this.props.children);

            return (
                <div 
                    className="modal fade" 
                    id="modal" 
                    tabIndex="-1" 
                    role="dialog"
                    data-keyboard="false" 
                    data-backdrop="static">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h3 className="modal-title">{ this.props.title }</h3>
                                </div>
                                <div className="modal-body">
                                    { sifted.others }
                                </div>
                            </div>
                        </div>
                        <div id="modal-context">
                            <ul className="nav nav-pills nav-stacked">
                                { sifted.controls }                            
                            </ul>
                        </div>
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
