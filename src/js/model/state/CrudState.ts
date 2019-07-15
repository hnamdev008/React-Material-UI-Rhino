import Record from './Record';

export abstract class CrudState {
    constructor(qualifier: string) {
        this.qualifier = qualifier
    }

    records: Array<Record>;
    selectedRecord: Record;

    mode: ModeType = 'root';
    view: ViewType = 'grid';
    widgetState = {};

    // selectedRecordId: number
    qualifier: string;
    page: number
    totalPages: number
}

export type ViewType = 'grid' | 'table'
export type ModeType = 'root' | 'add' | 'edit'