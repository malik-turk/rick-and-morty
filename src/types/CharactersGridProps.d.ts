export interface CharactersGridProps {
    data: any;
    refetch: (pageObject: CharacterRefetchParams) => void;
    loading: boolean;
}