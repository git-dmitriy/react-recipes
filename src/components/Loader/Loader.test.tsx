import {Loader} from './Loader';
import {it, expect} from 'vitest';
import {render} from '@testing-library/react';

it('should render loader', () => {
    const tree = render(<Loader/>);
    expect(tree).toMatchSnapshot();
});
