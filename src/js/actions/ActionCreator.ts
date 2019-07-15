import Dto from '../model/dto/Dto';
import PagedDto from '../model/dto/PagedDto'
import Mapper from '../mappers/Mapper'
import CrudService from '../service/CrudServiceZ'
import Record from '../model/state/Record';
import { ActionType } from './ActionType';
import handleErr from '../validation/submit/SubmitValidationHandlerZ';

abstract class ActionCreator<S extends CrudService<Dto, PagedDto>> {
    private ServiceCls: { new(): S };
    private mapper: Mapper;
    protected qualifier: string;

    constructor(S: { new(): S }, mapper: Mapper, qualifier: string) {
        this.ServiceCls = S;
        this.mapper = mapper;
        this.qualifier = qualifier;
    }

    public initPage(dispatch): void {
        new this.ServiceCls().read()
        .then(dtos => {
            const state = this.mapper.toState(dtos);

            dispatch({
                type: ActionType.CRUD_INIT,
                payload: state,
                context: this.qualifier
            });
        });
    }

    public openAdd(dispatch): void {
        dispatch({
            type: ActionType.CRUD_OPEN_ADD,
            context: this.qualifier
        });
    }

    public openEdit(dispatch, id: number) {
        dispatch({
            type: ActionType.CRUD_OPEN_EDIT,
            payload: id,
            context: this.qualifier
        });
    }

    public update(dispatch, values: Record): Promise<any> {
        const map = this.mapper;
        const dto = map.toDto(values)
        return new this.ServiceCls().update(dto)
        .then(() => {
            this.initPage(dispatch);

            dispatch({
                type: ActionType.CRUD_EDIT_SUCCESS,
                context: this.qualifier
            })
        })
        .catch(response => {
            return handleErr(response, map);
        })
    }

    public create(dispatch, values: Record): Promise<any> {
        const map = this.mapper;
        const dto = map.toDto(values)
        return new this.ServiceCls().create(dto)
        .then(created => {
            this.initPage(dispatch);

            dispatch({
                type: ActionType.CRUD_ADD_SUCCESS,
                context: this.qualifier
            })
        })
        .catch(response => {
            return handleErr(response, map);
        })
    }

    public remove(dispatch, id: number) {
        new this.ServiceCls().delete(id)
        .then(removed => {
            this.initPage(dispatch);

            dispatch({
                type: ActionType.CRUD_REMOVE_SUCCESS,
                payload: id,
                context: this.qualifier
            })
        });
    }

    public toggleView(dispatch) {
        dispatch({  
            type: ActionType.CRUD_TOGGLE_VIEW,
            context: this.qualifier
        });
    }

    public cancel(dispatch) {
        dispatch({
            type: ActionType.CRUD_CANCEL,
            context: this.qualifier
        })

        this.initPage(dispatch);
    }
}

export default ActionCreator;