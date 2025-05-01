import {Layout} from '@components/Layout';
import {it, expect} from "vitest";
import {render} from "@testing-library/react";

it('should render correctly', () => {
    const tree = render(
        <Layout>
            <div/>
        </Layout>
    )

    expect(tree).toMatchSnapshot();
});
