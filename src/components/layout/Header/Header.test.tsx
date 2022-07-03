import renderer from 'react-test-renderer';
import { Header } from 'components/layout/Header';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { AppState } from 'context/AppState';

it('renders header correctly', () => {
  const history = createMemoryHistory();

  const tree = renderer
    .create(
      <AppState>
        <Router location={history.location} navigator={history}>
          <Header />
        </Router>
      </AppState>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
