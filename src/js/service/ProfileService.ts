import CrudService from './CrudServiceZ';
import ProfileDto from '../model/dto/profile/ProfileDto';
import ProfileXDto from '../model/dto/profile/ProfileXDto';
import * as http from './HttpUtil';

class ProfileService extends CrudService<ProfileDto, any> {
    constructor() {
        super('profiles');
    }

    public async read(): Promise<ProfileXDto> {
        return http.get<ProfileXDto>
            (`${this.resource}?include[]=user.*&per_page=30`);
    }
}

export default ProfileService;