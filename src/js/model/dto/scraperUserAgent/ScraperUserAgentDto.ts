import CommitableDto from '../CommitableDto';

interface ScraperUserAgentDto extends CommitableDto {
    "user_agent_data": string,
    "name": string
}

export default ScraperUserAgentDto;