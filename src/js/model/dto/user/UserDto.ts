import CommitableDto from '../CommitableDto';

interface UserDto extends CommitableDto {
    "username": string,
    "first_name": string,
    "last_name": string,
    "is_active": boolean,
    "email": string,
    password?: string
}

export default UserDto;