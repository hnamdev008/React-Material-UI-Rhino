import PagedDto from '../PagedDto'
import UserDto from './UserDto';

interface UserXDto extends PagedDto {
    users: UserDto[];
}

export default UserXDto;

