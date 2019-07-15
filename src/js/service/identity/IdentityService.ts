import { Service } from '../Service';
import CredentialDto from '../../model/dto/identity/CredentialDto';
import AuthzResponseDto from '../../model/dto/identity/AuthzResponseDto';
import * as http from '../HttpUtil';

export class IdentityService extends Service {
    private url: string;

    constructor() {
        super();
        this.url = `${this.baseServiceUrl()}/v1/token/`;
    }

    public async login(dto: CredentialDto): Promise<AuthzResponseDto> {
        return await http.post<AuthzResponseDto>
                    (`${this.url}`, dto, false);
    }

    public async refresh(token: string): Promise<AuthzResponseDto> {
        return await http.post<AuthzResponseDto>
                    (`${this.url}refresh/`, { token: token }, false);
    }
}