import ActionCreator from './ActionCreator';
import TargetListFlatViewService from '../service/TargetListFlatViewService';
import TargetListFlatViewState from '../model/state/targetListFlatView/TargetListFlatViewState';
import TargetListService from '../service/TargetListService';
import TargetListState from '../model/state/targetList/TargetListState'
import TargetListFlatViewRecord from '../model/state/targetListFlatView/TargetListFlatViewRecord'
import TargetListFlatViewDto from '../model/dto/targetListFlatView/TargetListFlatViewDto';
import { ActionType } from './ActionType';
import Ref from '../model/state/RefZ';
import handleErr from '../validation/submit/SubmitValidationHandlerZ';
import { types } from '../ducks/Feedback';

const LOAD  = 'skiff/crud/LOAD';

class TargetListAction {
    private static QUALIFIER = 'targetList';

    public load(): Function {
        return (dispatch) => 
        new TargetListFlatViewService().read()
        .then(dto => {
            const state = new TargetListFlatViewState();
            state.records = dto.target_lists.map(dto => {
                const record = new TargetListFlatViewRecord();
                record.description = dto.description
                record.client = new Ref(dto.client.id, dto.client.name)
                record.nickname = dto.nickname
                record.target = dto.target;
                record.id = dto.id;
                return record;
            })

            dispatch({
                type: ActionType.CRUD_INIT,
                payload: state,
                context: TargetListAction.QUALIFIER
            });
        });
    }

    public openEdit(id: number): Function {
        return (dispatch) => {
            dispatch({
                type: ActionType.CRUD_OPEN_EDIT,
                payload: id,
                context: TargetListAction.QUALIFIER
            });
        }
    }

    public openAdd(): Function {
        return (dispatch) => {
            dispatch({
                type: ActionType.CRUD_OPEN_ADD,
                context: TargetListAction.QUALIFIER
            });
        }
    }

    public upload(csv): Function {
         return (dispatch) => {
            new TargetListService().uploadCsv(csv)
            .then(dto => {
                const record = new TargetListFlatViewRecord();
                record.client = null,
                record.description = dto.target_list.description,
                record.nickname = dto.target_list.nickname,
                record.target = <any>dto.target_list.target

                dispatch({
                    type: ActionType.TARGET_LIST_UPLOAD,
                    payload: record,
                    context: TargetListAction.QUALIFIER
                });
            })
            .catch(err => {
                if(err.non_field_errors) {
                    dispatch({
                        type: types.ALERT_ERR,
                        payload: `err.non_field_errors`
                    });
                }

            });
        }
    }

    public cancel(dispatch) {
        dispatch(this.load());
        dispatch({
            type: ActionType.CRUD_CANCEL,
            context: TargetListAction.QUALIFIER
        }) 
    }

    public remove(dispatch, id: number) {
        new TargetListService().delete(id)
        .then(removed => {
            dispatch(this.load());

            dispatch({
                type: ActionType.CRUD_REMOVE_SUCCESS,
                payload: id,
                context: TargetListAction.QUALIFIER
            })
        });
    }

    public addColumn(name: string) {
        return (dispatch) => {
            dispatch({
                type: ActionType.TARGET_LIST_ADD_COLUMN,
                payload: name,
                context: TargetListAction.QUALIFIER
            });
        }
    }

    public updateRow(event) {
        return (dispatch) => {
            dispatch({
                type: ActionType.TARGET_LIST_UPDATE_ROW,
                payload: event,
                context: TargetListAction.QUALIFIER
            });
        }
    }

    public addRow(event) {
        return (dispatch) => {
            dispatch({
                type: ActionType.TARGET_LIST_ADD_ROW,
                payload: event,
                context: TargetListAction.QUALIFIER
            });
        }
    }

    public create(dispatch, values: TargetListFlatViewRecord) {
        const dto: any= {
            description: values.description,
            client: values.client.id,
            nickname: values.nickname,
            target: values.target,
            id: values.id
        }
        return new TargetListFlatViewService().create(dto)
       .then(() => {
           dispatch(this.load());

           dispatch({
               type: ActionType.CRUD_ADD_SUCCESS,
               context: TargetListAction.QUALIFIER
           })
       })
       .catch(err => {
           return handleErr(err, <any>{
                toForm(dto) {
                    return {
                        description: dto.description,
                        client: dto.client.id,
                        nickname: dto.nickname,
                        target: dto.target
                    }
                }
            });
       });
    }

    public split(dispatch, values: TargetListFlatViewRecord) {
        const dto: any= {
            description: values.description,
            client: values.client.id,
            nickname: values.nickname,
            target: values.target,
            id: values.id
        }
        return new TargetListFlatViewService().create(dto)
       .then(() => {
            dispatch({
                type: types.ALERT_INFO,
                payload: `Created new Target List split from ${values.nickname}`
            });

           dispatch({
               type: ActionType.TARGET_LIST_SPLIT_SUCCESS,
               context: TargetListAction.QUALIFIER
           })
       })
       .catch(err => {
           return handleErr(err, <any>{
                toForm(dto) {
                    return {
                        description: dto.description,
                        client: dto.client.id,
                        nickname: dto.nickname,
                        target: dto.target
                    }
                }
            });
       });
    }

    public alert(dispatch, msg: string) {
        dispatch({
            type: types.ALERT_ERR,
            payload: msg
        });
    }

    public update(dispatch, values: TargetListFlatViewRecord) {
        const dto: any= {
            description: values.description,
            client: values.client.id,
            nickname: values.nickname,
            target: values.target,
            id: values.id
        }
       return new TargetListFlatViewService().update(dto)
       .then(() => {
           dispatch(this.load());

           dispatch({
               type: ActionType.CRUD_EDIT_SUCCESS,
               context: TargetListAction.QUALIFIER
           })
       })
       .catch(err => {
           return handleErr(err, <any>{
                toForm(dto) {
                    return {
                        description: dto.description,
                        client: dto.client.id,
                        nickname: dto.nickname,
                        target: dto.target
                    }
                }
            });
       });
    }      
}

export default new TargetListAction();