import Mapper from './Mapper';
import UserXDto from '../model/dto/user/UserXDto';
import UserDto from '../model/dto/user/UserDto';
import UserState from '../model/state/user/UserState';
import UserRecord from '../model/state/user/UserRecord';

class UserMapperStatic implements Mapper { 
    toState(result: UserXDto): UserState {
        const state = new UserState();

        state.records = result.users.map(dto => {             
            return {
                id: dto.id,
                firstName: dto.first_name,
                lastName: dto.last_name,
                isActive: dto.is_active,
                email: dto.email,
                username: dto.username
            }
            
        });        

        return state;
    }

    toForm(dto: UserDto) {
        return {
            id: dto.id,
            firstName: dto.first_name,
            lastName: dto.last_name,
            isActive: dto.is_active,
            email: dto.email,
            username: dto.username
        }
    }

    toDto(state: UserRecord): UserDto {
        return {
            "username": state.username,
            "first_name": state.firstName,
            "last_name": state.lastName,
            "is_active": state.isActive,
            "email": state.email,
            "password": state.password,
            commit: true,
            id: state.id            
        }
    }
}
const UserMapper = new UserMapperStatic();
export default UserMapper;