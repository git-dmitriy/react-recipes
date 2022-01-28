import { useState, useEffect } from 'react';
import { getAllCategories } from 'helpers/api';
import { Loader } from 'components/Loader';
import { CategoryList } from 'components/category/CategoryList';
import { Layout } from 'components/layout/Layout';
import { CategoryItemTypes } from 'appTypes';
import { LostConnection } from 'components/LostConnection';

export const Categories: React.FC = () => {
  const [catalog, setCatalog] = useState([]);
  const [disconnected, setDisconnected] = useState(false);

  useEffect(() => {
    let cleanupFuse = true;

    getAllCategories()
      .then((data) => {
        const categories = data.categories.sort(
          (a: CategoryItemTypes, b: CategoryItemTypes) =>
            a.strCategory > b.strCategory ? 1 : -1
        );
        cleanupFuse && setCatalog(categories);
      })
      .catch((e) => {
        console.warn(e);
        setDisconnected(true);
      });

    return () => {
      cleanupFuse = false;
    };
  }, []);

  if (disconnected) {
    return (
      <Layout>
        <LostConnection />
      </Layout>
    );
  }

  return (
    <Layout>
      {!catalog.length ? <Loader /> : <CategoryList catalog={catalog} />}
    </Layout>
  );
};
