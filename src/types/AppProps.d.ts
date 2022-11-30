import { CharactersResponse } from "./Characters.";

export interface QueryTypes {
    loading: boolean;
    refetch: () => void;
    data: CharactersResponse|undefined;
}