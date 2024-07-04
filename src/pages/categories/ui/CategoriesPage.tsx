import React, { useState, useEffect, useContext } from 'react';
import { getAllCategories } from '@shared/api/apiUtils/apiUtils.ts';
import { CategoryList } from '@shared/ui/CategoryList';
import { Layout } from '@shared/ui/Layout';
import { CategoryItemTypes } from '@shared/model/appTypes/appTypes.ts';
import { LostConnection } from '@shared/ui/LostConnection';
import { AppContext } from '@app/context/AppContext.ts';

export const CategoriesPage: React.FC = () => {
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
