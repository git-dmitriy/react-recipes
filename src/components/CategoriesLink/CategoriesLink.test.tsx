import {MemoryRouter} from 'react-router-dom';
import {CategoriesLink} from './CategoriesLink';
import {it, expect} from 'vitest';
import {render} from "@testing-library/react";

const country = 'British';
const category = 'Breakfast';

it('should render category links', () => {
    const tree = render(
        <MemoryRouter>
            <CategoriesLink country={country} category={category}/>
        </MemoryRouter>)

    expect(tree).toMatchSnapshot();
});

it('should render category links without country origin', () => {
    const country = 'Unknown';

    const tree = render(
        <MemoryRouter>
            <CategoriesLink country={country} category={category}/>
        </MemoryRouter>
    )

    expect(tree).toMatchSnapshot();
});
