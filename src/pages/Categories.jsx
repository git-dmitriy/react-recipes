import { useState, useEffect } from 'react';
import { getAllCategories } from '../helpers/api';
import { Preloader } from '../components/Preloader/Preloader';
import { CategoryList } from '../components/Category/CategoryList';

export const Categories = () => {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
    });
  }, []);

  return (
    <>{!catalog.length ? <Preloader /> : <CategoryList catalog={catalog} />}</>
  );
};
