import renderer from 'react-test-renderer';
import {LostConnection} from './LostConnection';
import {it, expect} from 'vitest';

it('should render correctly', () => {
    const tree = renderer.create(<LostConnection/>).toJSON();

    expect(tree).toMatchSnapshot();
});
