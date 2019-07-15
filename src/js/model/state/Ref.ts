class Ref {
    id: number
    text: string
    suggestions?: {
        id: number,
        text: string
    }[]
    loading?: boolean
}

export default Ref;