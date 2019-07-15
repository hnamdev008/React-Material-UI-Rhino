import * as popsicle from 'popsicle';
import { Identity } from '../security/Identity';

const addAuthzHeader = (headers: { [name: string]: string }): Promise<void> => {
    return Identity.getToken()
    .then(token => {
        headers['Authorization'] = `JWT ${token}`;
    })    
}

export const upload = async <T>(url: string, body: any, authz = true): Promise<T> => {
    let headers: { [name: string]: string } = {
        'Content-Type': 'multipart/form-data; boundary=----------------------------4d7f70627994'
    }
    if(authz) await addAuthzHeader(headers);
    
    

    return await popsicle.request({
        method: 'POST',
        url: url,
        body: body,
        headers: headers
    })
    .use(popsicle.plugins.parse('json'))
    .then(response => {
        if(response.status >= 400)
            //return handleErr(response.body);
            return Promise.reject(response);  //return raw response

        return <T>response.body;
    })
}

export const post = async <T>(url: string, body: any, authz = true): Promise<T> => {
    let headers: { [name: string]: string } = {
        'Content-Type': 'application/json'
    }
    if(authz) await addAuthzHeader(headers);
    
    return await popsicle.request({
        method: 'POST',
        url: url,
        body: body,
        headers: headers
    })
    .use(popsicle.plugins.parse('json'))
    .then(response => {
        if(response.status >= 400)
            //return handleErr(response.body);
            return Promise.reject(response);  //return raw response

        return <T>response.body;
    })
}

export const get2 = async <T>(url: string, authz = true): Promise<T> => {
    let headers: { [name: string]: string } = {};
    if(authz) await addAuthzHeader(headers);

    return await popsicle.request({
        method: 'GET',
        url: url,
        headers: headers
    })
    .then(response => <T>response.body);
}

export const get = async <T>(url: string, authz = true): Promise<T> => {
    let headers: { [name: string]: string } = {};
    if(authz) await addAuthzHeader(headers);

    return await popsicle.request({
        method: 'GET',
        url: url,
        headers: headers
    })
    .use(popsicle.plugins.parse('json'))
    .then(response => <T>response.body);
}

export const put = async <T>(url: string, body: any, authz = true): Promise<T> => {
    let headers: { [name: string]: string } = {
        'Content-Type': 'application/json'
    }
    if(authz) await addAuthzHeader(headers);
    
    return await popsicle.request({
        method: 'PUT',
        url: url,
        body: body,
        headers: headers
    })
    .use(popsicle.plugins.parse('json'))
    .then(response => {
        if(response.status >= 400)
            return Promise.reject(response);

        return <T>response.body;
    });
}

export const patch = async <T>(url: string, body: any, authz = true): Promise<T> => {
    let headers: { [name: string]: string } = {
        'Content-Type': 'application/json'
    }
    if(authz) await addAuthzHeader(headers);
    
    return await popsicle.request({
        method: 'PATCH',
        url: url,
        body: body,
        headers: headers
    })
    .use(popsicle.plugins.parse('json'))
    .then(response => {
        return <T>response.body;
    });
}

export const del = async <T>(url: string, authz = true): Promise<T> => {
    let headers: { [name: string]: string } = {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
    if(authz) await addAuthzHeader(headers);
    
    return await popsicle.request({
        method: 'DELETE',
        url: url,
        headers: headers
    })
    .use(popsicle.plugins.parse('json'))
    .then(response => {
        return <T>response.body; //TODO: error handling when != 204
    });
}

export const dynamicGet = async (rsrc: string, identifier: string, authz = true): Promise<any[]> => {
    let headers: { [name: string]: string } = {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
    if(authz) await addAuthzHeader(headers);
    
    return await popsicle.request({
        method: 'GET',
        url: `https://sandbar-dev.rhino.lan/api/v1/${rsrc}/?exclude[]=*&include[]=${identifier}&include[]=id`,
        headers: headers
    })
    .use(popsicle.plugins.parse('json'))
    .then(response => {
        return response.body[rsrc];
    });
}

// export const dynamicGetX = async (url: string, authz = true): Promise<any[]> => {
//     let headers: { [name: string]: string } = {
//         'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
//     }
//     if(authz) await addAuthzHeader(headers);
    
//     return await popsicle.request({
//         method: 'GET',
//         url: url,
//         headers: headers
//     })
//     .use(popsicle.plugins.parse('json'))
//     .then(response => {
//         return response.body;
//     });
// }

export const dynamicGetX = async <T>(url, authz = true): Promise<T> => {
    let headers: { [name: string]: string } = {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
    if(authz) await addAuthzHeader(headers);
    
    return await popsicle.request({
        method: 'GET',
        url: url,
        headers: headers
    })
    .use(popsicle.plugins.parse('json'))
    .then(response => {
        return response.body;
    });
}