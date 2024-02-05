import renderer from 'react-test-renderer';
import {CategoryItem} from './CategoryItem';
import {MemoryRouter} from 'react-router-dom';
import {it, expect} from 'vitest'

const data = {
    idCategory: '13',
    strCategory: 'Breakfast',
    strCategoryDescription:
        'Breakfast is the first meal of a day. The word in English refers to breaking the fasting period of the previous night. There is a strong likelihood for one or more "typical", or "traditional", breakfast menus to exist in most places, but their composition varies widely from place to place, and has varied over time, so that globally a very wide range of preparations and ingredients are now associated with breakfast.',
    strCategoryThumb: 'https://www.themealdb.com/images/category/breakfast.png',
};

it('should render correctly', () => {
    const tree = renderer
        .create(
            <MemoryRouter>
                <CategoryItem {...data} />
            </MemoryRouter>
        )
        .toJSON();

    expect(tree).toMatchSnapshot();
});
