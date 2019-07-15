import * as http from './HttpUtil';
import { Identity } from '../security/Identity';

class PreviewService {
    public async previewEmail(id: number): Promise<string> {
        return http.get<{ source: string }>
            (`${Identity.Server.getBaseUrl()}/api/v1/vector-emails/${id}/email-preview`)
            .then(result => {
                return result.source;
            })
    }

    public async previewLandingPage(id: number): Promise<string> {
        return http.get<{ source: string }>
            (`${Identity.Server.getBaseUrl()}/api/v1/landing-pages/preview/${id}`)
            .then(result => {
                return result.source;
            })
    }

    public async previewRedirectPage(id: number): Promise<string> {
        return http.get<{ source: string }>
            (`${Identity.Server.getBaseUrl()}/api/v1/landing-pages/preview/${id}`)
            .then(result => {
                return result.source;
            })
    }
}

export default PreviewService;