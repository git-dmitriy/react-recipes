import { Link } from 'react-router-dom';

export default function CategoryItem({
  idCategory,
  strCategory,
  strCategoryThumb,
  strCategoryDescription,
}) {
  return (
    <div class='card'>
      <div class='card-image'>
        <img src={strCategoryThumb} alt={strCategory} />
      </div>
      <div class='card-content'>
        <span class='card-title'>{strCategory}</span>
        <p>{strCategoryDescription.slice(0, 60)}...</p>
      </div>
      <div className='card-action'>
        <Link to={`/category/${idCategory}`} className='btn'>
          Watch category
        </Link>
      </div>
    </div>
  );
}
