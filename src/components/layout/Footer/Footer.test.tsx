import renderer from 'react-test-renderer';
import { Footer } from 'components/layout/Footer';
import { render, screen, cleanup } from '@testing-library/react';

afterEach(cleanup);

it('renders correctly', () => {
  const tree = renderer.create(<Footer />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('show owner name', () => {
  render(<Footer />);

  const owner = screen.getByText(/Dmitriy Shalberkin/, { selector: 'span' });

  expect(owner).toBeDefined();
});

it('provide link to github', () => {
  render(<Footer />);

  const githubLink = screen.getByRole('link');

  expect(githubLink).toHaveAttribute('href', 'https://github.com/git-dmitriy');
});
