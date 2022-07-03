import { Link } from 'react-router-dom';
import { CategoryLinkTypes } from 'appTypes';

export const CategoriesLink: React.FC<CategoryLinkTypes> = ({
  country,
  category,
}) => {
  return (
    <div>
      <p>
        <span className='inline-block w-19'>Country:</span>{' '}
        <span className='font-bold'>
          {country === 'Unknown' ? (
            'Origin not establish'
          ) : (
            <Link
              to={`/country/${country}`}
              className='border-b border-current hover:opacity-50 transition-opacity'
            >
              {country}
            </Link>
          )}
        </span>
      </p>
      <p>
        <span className='inline-block w-19'>Category:</span>{' '}
        <span className='font-bold'>
          {
            <Link
              to={`/category/${category}`}
              className='border-b border-current hover:opacity-50 transition-opacity'
            >
              {category}
            </Link>
          }
        </span>
      </p>
    </div>
  );
};
