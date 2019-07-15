import Dto from './Dto';

interface CommitableDto extends Dto {
    commit: boolean
}

export default CommitableDto;