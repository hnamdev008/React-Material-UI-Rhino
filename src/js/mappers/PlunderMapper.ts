import Mapper from './Mapper';
import PlunderXDto from '../model/dto/plunder/PlunderXDto';
import PlunderDto from '../model/dto/plunder/PlunderDto';
import PlunderState from '../model/state/plunder/PlunderState';
import PlunderRecord from '../model/state/plunder/PlunderRecord';
import { 
    refOAuthResult
} from './common/AssemblyUtil';

class PlunderMapperStatic implements Mapper { 
    toState(result: PlunderXDto): PlunderState {
        const state = new PlunderState();

        state.records = result.plunders.map(dto => {             
            return {
                mimetype: dto.mimetype,
                oAuthResult: refOAuthResult(dto, result.o_auth_results),
                filename: dto.filename,
                lastModified: dto.last_modified,
                fileId: dto.file_id,
                path: dto.path,
                data: dto.data,
                id: dto.id
            }
            
        });        

        return state;
    }

    toForm(dto: PlunderDto) {
        return {
            mimetype: dto.mimetype,
            oauthResult: dto.oauth_result,
            filename: dto.filename,
            lastModified: dto.last_modified,
            fileId: dto.file_id,
            path: dto.path,
            data: dto.data,
            id: dto.id
        }
    }

    toDto(state: PlunderRecord): PlunderDto {
        return {
            "mimetype": state.mimetype,
            "oauth_result": state.oAuthResult && state.oAuthResult.id,
            "filename": state.filename,
            "last_modified": state.lastModified,
            "file_id": state.fileId,
            "path": state.path,
            "data": state.data,
            commit: true,
            id: state.id            
        }
    }
}
const PlunderMapper = new PlunderMapperStatic();
export default PlunderMapper;