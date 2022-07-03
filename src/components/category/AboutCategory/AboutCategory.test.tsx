import renderer from 'react-test-renderer';
import { AboutCategory } from './AboutCategory';

const data = {
  idCategory: '1',
  strCategory: 'Beef',
  strCategoryDescription:
    'Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]',
  strCategoryThumb: 'https://www.themealdb.com/images/category/beef.png',
};

it('should render correctly', () => {
  const tree = renderer
    .create(<AboutCategory categoryInfo={{ ...data }} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
