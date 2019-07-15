import CommitableDto from '../CommitableDto';

interface ProfileDto extends CommitableDto {
    "timezone": string,
    "user": number,
}

export default ProfileDto;