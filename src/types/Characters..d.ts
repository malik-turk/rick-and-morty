export interface CharactersData {
    id: string;
    name: string;
    status: string;
    image: string;
}

export interface CharactersResponse {
    results: CharactersData[]
}

export interface CharacterRefetchParams {
    page: number;
}
