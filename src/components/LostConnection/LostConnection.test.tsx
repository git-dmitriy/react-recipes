import renderer from 'react-test-renderer';
import { LostConnection } from './LostConnection';

it('should render correctly', () => {
  const tree = renderer.create(<LostConnection />).toJSON();

  expect(tree).toMatchSnapshot();
});
