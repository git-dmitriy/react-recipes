import { CategoryItem } from 'components/category/CategoryItem';

export const CategoryList = ({ catalog }) => {
  return (
    <ul className='mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 justify-items-center gap-5 md:gap-7 xl:max-w-6xl max-w-4xl'>
      {catalog.map((el) => (
        <CategoryItem key={el.idCategory} {...el} />
      ))}
    </ul>
  );
};
