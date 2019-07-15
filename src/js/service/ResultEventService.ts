import CrudService from './CrudServiceZ';
import ResultEventDto from '../model/dto/resultEvent/ResultEventDto';
import * as http from './HttpUtil';

class ResultEventService extends CrudService<ResultEventDto, any> {
    constructor() {
        super('result-events');
    }

    public async read(): Promise<{ result_events: ResultEventDto[] }> {
        return http.get<{ result_events: ResultEventDto[] }>
            (`${this.resource}?filter{vector_email.engagement.id}=350&include[]=vector_email`);
    }

    public async readForEngagement(engagementId: number): Promise<{ result_events: ResultEventDto[] }> {
        return http.get<{ result_events: ResultEventDto[] }>
            (`${this.resource}?filter{vector_email.engagement.id}=${engagementId}&include[]=vector_email`);
    }

    public async getSuggestions(): Promise<{ result_events: ResultEventDto[] }> {
        return http.get<{ result_events: ResultEventDto[] }>
            (`${this.resource}?exclude[]=*&include[]=timestamp&include[]=id`);
    }
}

export default ResultEventService;