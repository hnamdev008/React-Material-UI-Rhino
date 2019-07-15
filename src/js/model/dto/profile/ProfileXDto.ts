import PagedDto from '../PagedDto'
import ProfileDto from './ProfileDto';
import UserDto from '../user/UserDto';

interface ProfileXDto extends PagedDto {
    profiles: ProfileDto[];
    users: UserDto[];
}

export default ProfileXDto;

