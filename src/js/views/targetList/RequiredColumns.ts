export const required = [
    'firstname',
    'lastname',
    'email',
    'timezone'
]

export const isRequired = (name): boolean => {
    return required.filter(str => {
        return name === str;
    }).length > 0
}