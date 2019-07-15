import CommitableDto from '../CommitableDto';

interface PlunderDto extends CommitableDto {
    "mimetype": string,
    "oauth_result": number,
    "filename": string,
    "last_modified": string,
    "file_id": string,
    "path": string,
    "data": string
}

export default PlunderDto;