import renderer from 'react-test-renderer';
import { YoutubeIframe } from './YoutubeIframe';

it('should render the iframe element with current link', () => {
  const link = 'FXjYU2Ensck';

  const tree = renderer.create(<YoutubeIframe address={link} />).toJSON();

  expect(tree).toMatchSnapshot();
});
