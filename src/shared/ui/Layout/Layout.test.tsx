import renderer from 'react-test-renderer';
import {Layout} from '@shared/ui/Layout/index.ts';
import {it, expect} from "vitest";

it('should render correctly', () => {
    const tree = renderer
        .create(
            <Layout>
                <div/>
            </Layout>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
