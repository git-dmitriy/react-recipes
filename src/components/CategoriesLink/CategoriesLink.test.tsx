import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import {CategoriesLink} from './CategoriesLink';
import {it, expect} from 'vitest';

const country = 'British';
const category = 'Breakfast';

it('should render category links', () => {
    const tree = renderer
        .create(
            <MemoryRouter>
                <CategoriesLink country={country} category={category}/>
            </MemoryRouter>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('should render category links without country origin', () => {
    const country = 'Unknown';

    const tree = renderer
        .create(
            <MemoryRouter>
                <CategoriesLink country={country} category={category}/>
            </MemoryRouter>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
