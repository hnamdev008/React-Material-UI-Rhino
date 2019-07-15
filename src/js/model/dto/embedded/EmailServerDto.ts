import CommitableDto from '../CommitableDto';

interface EmailServerDto extends CommitableDto {
    use_tls: boolean,
    host: string,
    login: string,
    test_recipient: string,
    password: string,
    port: number
}

export default EmailServerDto;