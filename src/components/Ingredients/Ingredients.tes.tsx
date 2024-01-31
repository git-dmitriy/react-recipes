import renderer from 'react-test-renderer';
import {Ingredients} from './index';
import {it, expect} from 'vitest';

it('should render correctly', () => {
    const data = {
        strIngredient1: 'Sausages',
        strIngredient2: 'Bacon',
        strIngredient3: 'Mushrooms',
        strIngredient4: 'Tomatoes',
        strIngredient5: 'Black Pudding',
        strIngredient6: 'Eggs',
        strIngredient7: 'Bread',
        strMeasure1: '2',
        strMeasure2: '3',
        strMeasure3: '2',
        strMeasure4: '2',
        strMeasure5: '1 Slice',
        strMeasure6: '2',
        strMeasure7: '1 Slice',
    };

    const tree = renderer.create(<Ingredients props={data}/>).toJSON();

    expect(tree).toMatchSnapshot();
});
