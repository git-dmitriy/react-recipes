import renderer from 'react-test-renderer';
import { Layout } from 'components/layout/Layout';

it('should render correctly', () => {
  const tree = renderer.create(<Layout />).toJSON();
  expect(tree).toMatchSnapshot();
});
