import { CharactersResponse } from "./Characters.";

export interface QueryTypes {
    loading: boolean;
    data: CharactersResponse|undefined;
}