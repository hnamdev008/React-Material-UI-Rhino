import { Claims } from './Claims';
import { CurrentUser } from '../../service/CurrentUser';
import * as moment from 'moment';

export const decode = (): Claims => {
    const jwt = CurrentUser.Session.getToken();
    if(jwt)
        return (require('jwt-decode'))(jwt);

    return null;
}

export const isExpired = (): boolean => {
    const now = moment().utc().valueOf() / 1000
    // return moment(now).isSameOrAfter(claims.exp);
    return now > this.decode().exp;
}

export const getUser = (): string => {
    const claims = this.decode();
    return claims ? claims.username : null;
}