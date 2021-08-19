import { Link } from 'react-router-dom';

export default function CategoryItem({
  idCategory,
  strCategory,
  strCategoryThumb,
  strCategoryDescription,
}) {
  return (
    <li className='flex bg-green-100 rounded-lg p-4 m-2'>
      <div className='w-64 bg-yellow-50 rounded-lg flex items-center justify-center'>
        <img className='w-full' src={strCategoryThumb} alt={strCategory} />
      </div>
      <div className='flex flex-col items-start ml-4'>
        <h4 className='text-xl font-semibold'>{strCategory}</h4>
        <p className='text-sm'>{strCategoryDescription.slice(0, 60)}...</p>
        <Link
          to={`/category/${strCategory}`}
          className='p-2 leading-none rounded font-medium mt-3 bg-yellow-300 hover:bg-yellow-200 transition duration-150 text-xs uppercase'
        >
          Watch category
        </Link>
      </div>
    </li>
  );
}
