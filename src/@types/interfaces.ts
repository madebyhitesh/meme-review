export interface IMeme {
    box_count: number
    height?: number
    id: string
    name?: string
    url?: string
    width?: number
}

export interface ISearch {
    setSearchValue: React.Dispatch<React.SetStateAction<string | null>>
}

export interface IGenerateMeme {
    template_id: string,
    username: string | undefined,
    password: string | undefined,
    text0?: string,
    text1?: string,
    text2?: string,
    text3?: string,
    text4?: string,
    text5?: string,
    text6?: string,
}