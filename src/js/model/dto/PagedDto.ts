interface PagedDto {
    meta: {
        total_results: number
        per_page: number
        total_pages: number
        page: number
    }
}

export default PagedDto;