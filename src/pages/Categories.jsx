import { useState, useEffect } from 'react';
import { getAllCategories } from 'helpers/api';
import { Loader } from 'components/Loader';
import { CategoryList } from 'components/category/CategoryList';
import { Layout } from 'components/layout/Layout';

export const Categories = () => {
  const [catalog, setCatalog] = useState([]);
  const [disconnected, setDisconnected] = useState(null);

  useEffect(() => {
    getAllCategories()
      .then((data) => {
        const categories = data.categories.sort((a, b) =>
          a.strCategory > b.strCategory ? 1 : -1
        );
        setCatalog(categories);
      })
      .catch(() => setDisconnected(true));
  }, []);

  if (disconnected) {
    return <h1>Disconnected</h1>;
  }

  return (
    <Layout>
      {!catalog.length ? <Loader /> : <CategoryList catalog={catalog} />}
    </Layout>
  );
};
