import {render, screen} from '@testing-library/react';
import renderer from 'react-test-renderer';
import {RecipeImage} from './RecipeImage';
import {it, expect} from 'vitest';

const data = {
    altText: 'English Breakfast',
    imgLink: 'https://www.themealdb.com/images/media/meals/utxryw1511721587.jpg',
    imgPlaceholder:
        'https://via.placeholder.com/500.png/546E7A?text=English Breakfast',
};

it('should render an image element with the provided link', () => {
    const tree = renderer
        .create(
            <RecipeImage
                imgLink={data.imgLink}
                imgPlaceholder={data.imgPlaceholder}
                altText={data.altText}
            />
        )
        .toJSON();

    expect(tree).toMatchSnapshot();
});

it('should render an image element with a placeholder link', () => {
    const tree = renderer
        .create(
            <RecipeImage
                imgPlaceholder={data.imgPlaceholder}
                altText={data.altText}
            />
        )
        .toJSON();

    expect(tree).toMatchSnapshot();
});

it('should render an image element with the current alt', () => {
    render(
        <RecipeImage
            imgLink={data.imgLink}
            imgPlaceholder={data.imgPlaceholder}
            altText={data.altText}
        />
    );

    const image = screen.getByRole('img');

    expect(image.getAttribute('alt')).toBe(data.altText);
});
