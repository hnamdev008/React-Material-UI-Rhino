import * as React from 'react';
import * as react_redux from 'react-redux';
import { Modal } from '../components/common/Modal2';
import { Control } from '../components/common/Controls';
import { AppState } from '../../model/state/AppState';
import Record from '../../model/state/Record';
import { CrudState } from '../../model/state/CrudState';
import ActionCreator from '../../actions/ActionCreator';

export const AddModalContainer = (props: Props) => {
    const onSubmit = (values: Record):Promise<Record> => {
        return props.action
            .create(props.dispatch, values);
    }

    const onCancel = (): void => {
        props.action
            .cancel(props.dispatch);
    }

    const children = React.Children.map(props.children, child => {
        return React.cloneElement(child as React.ReactElement<any>,
            { submit: onSubmit });
    });

    return <Modal 
        title={ props.title }
        visible={ props.state.mode == 'add' }>
            <Control>
                <button onClick={onCancel}>
                    <span className="glyphicon glyphicon-share-alt"></span>
                    CANCEL
                </button>
            </Control>
            <Control>
                <label htmlFor="submit-form">SAVE</label>
            </Control>
            {props.controls}

            { children }
    </Modal>   
}

export interface Props {
    dispatch?
    state?: CrudState
    title?: string
    action?: ActionCreator<any>
    children?: React.ReactNode
    controls?: Control[]
    submitId?: string
}
