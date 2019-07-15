import Mapper from '../../mappers/Mapper';
const reduxForm = require('redux-form');
import * as popsicle from 'popsicle';

const handle = (object: popsicle.Response, map: Mapper) => {
    if(!object) return Promise.reject(object);

    if(object.status == 400) {
        const errors = object.body;
        let errObj = { };
        Object.keys(errors).forEach(key => {
            if(errors[key])
                errObj[key] = errors[key][0]
        })

        let mapped = map.toForm(errObj);
        mapped._error = 'Submission failed.  Please correct the errors indicated.' 
        throw new reduxForm.SubmissionError(mapped);
    }

    else return Promise.reject(object);
}

export default handle;