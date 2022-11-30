import { render, screen } from '@testing-library/react';
import CharactersGrid from '../components/CharactersGrid';

describe('CharactersGrid', () => {
    test('should render CharactersGrid component', () => {
        const refetch = () => console.log('refetch');
        const data = {
            characters: {
                results: []
            }
        };

        render(<CharactersGrid loading={true} refetch={refetch} data={data} />);
        const loadingSkeleton = screen.getAllByTestId('loading-skeleton');

        expect(loadingSkeleton[0]).toBeInTheDocument();
    });

    test('should render characters', () => {
        const refetch = () => console.log('refetch');
        const data = {
            characters: {
                results: [
                    {
                        id: '7c8e794c-70f7-11ed-a1eb-0242ac120002',
                        name: 'Rick Sanchez',
                        status: 'Alive',
                        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
                    }
                ]
            }
        };

        render(<CharactersGrid loading={false} refetch={refetch} data={data} />);
        const characterCard = screen.getAllByTestId('character-card--title');

        expect(characterCard[0]).toHaveTextContent('Rick Sanchez');
    });
});
