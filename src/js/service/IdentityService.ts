import CrudService from './CrudServiceZ';
import CredentialDto from '../model/dto/identity/CredentialDto';
import AuthzResponseDto from '../model/dto/identity/AuthzResponseDto';
import * as http from './HttpUtil';
import { Service } from './Service';

class IdentityService extends CrudService<any, any> {
    constructor() {
        super('token');
    }

    public async login(dto: CredentialDto): Promise<AuthzResponseDto> {
        return await http.post<AuthzResponseDto>
                    (`${this.resource}`, dto, false);
    }

    public async refresh(token: string): Promise<AuthzResponseDto> {
        return await http.post<AuthzResponseDto>
                    (`${this.resource}refresh/`, { token: token }, false);
    }
}

export default IdentityService;