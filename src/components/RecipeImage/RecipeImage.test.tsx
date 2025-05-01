import {render, screen} from '@testing-library/react';
import {RecipeImage} from './RecipeImage';
import {it, expect} from 'vitest';

const data = {
    altText: 'English Breakfast',
    imgLink: 'https://www.themealdb.com/images/media/meals/utxryw1511721587.jpg'
};

it('should render an image element with the provided link', () => {
    const tree = render(
        <RecipeImage
            imgLink={data.imgLink}
            altText={data.altText}
        />
    )

    expect(tree).toMatchSnapshot();
});

it('should render an image element with the current alt', () => {
    render(
        <RecipeImage
            imgLink={data.imgLink}
            altText={data.altText}
        />
    );

    const image = screen.getByRole('img');

    expect(image.getAttribute('alt')).toBe(data.altText);
});


it('should render an image element with a placeholder link', () => {
    const tree = render(
        <RecipeImage
            altText={data.altText}
        />
    )

    expect(tree).toMatchSnapshot();
});

