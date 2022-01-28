import { useState, useEffect, useContext } from 'react';
import { getAllCategories } from 'helpers/api';
import { CategoryList } from 'components/category/CategoryList';
import { Layout } from 'components/layout/Layout';
import { CategoryItemTypes } from 'appTypes';
import { LostConnection } from 'components/LostConnection';
import { AppContext } from 'context/AppContext';

export const Categories: React.FC = () => {
  const [catalog, setCatalog] = useState([]);
  const [disconnected, setDisconnected] = useState(false);
  const { setIsLoading } = useContext(AppContext);

  useEffect(() => {
    let cleanupFuse = true;

    setIsLoading(true);

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
      })
      .finally(() => setIsLoading(false));

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
    <Layout>{!!catalog.length && <CategoryList catalog={catalog} />}</Layout>
  );
};
