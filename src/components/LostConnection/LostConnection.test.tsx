import {LostConnection} from './LostConnection';
import {it, expect} from 'vitest';
import {render} from '@testing-library/react';

it('should render correctly', () => {
    const tree = render(<LostConnection/>);
    expect(tree).toMatchSnapshot();
});
