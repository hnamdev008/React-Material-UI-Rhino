const validate = (values) => {
    const { host, port, username, password } = values;
    let errors: any = {};

    if(!host)
        errors.host = 'Host required.';
    if(port && !Number.isInteger(parseInt(port)))
        errors.port = 'Optional port must be a number.'
    if(!username || username.trim() === '')
        errors.username = 'Username required.'
    if(!password || password.trim() === '')
        errors.password = 'Password required.'

    return errors;
}

export default validate;