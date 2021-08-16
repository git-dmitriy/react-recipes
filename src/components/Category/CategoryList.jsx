import CategoryItem from './CategoryItem';

export default function CategoryList({ catalog = [] }) {
  console.log(catalog);
  return (
    <ul className='mx-auto grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 xl:max-w-6xl max-w-4xl'>
      {catalog.map((el) => (
        <CategoryItem key={el.idCategory} {...el} />
      ))}
    </ul>
  );
}
