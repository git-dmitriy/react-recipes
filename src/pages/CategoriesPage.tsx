import React, {useState, useEffect, useContext} from 'react';
import {getAllCategories} from '@/api-utils.ts';
import {CategoryList} from '@components/CategoryList';
import {CategoryItemTypes} from '@/appTypes';
import {AppContext} from '@context/AppContext';

export const CategoriesPage: React.FC = () => {
    const [catalog, setCatalog] = useState([]);
    const {setIsLoading} = useContext(AppContext);

    useEffect(() => {

        setIsLoading(true);

        getAllCategories()
            .then((data) => {
                const categories = data.categories.sort(
                    (a: CategoryItemTypes, b: CategoryItemTypes) =>
                        a.strCategory > b.strCategory ? 1 : -1
                );
                setCatalog(categories);
            })
            .catch((e) => {
                console.warn(e);
            })
            .finally(() => setIsLoading(false));

        return () => {
        };
    }, []);

    return (
        <>{!!catalog.length && <CategoryList catalog={catalog}/>}</>
    );
};
