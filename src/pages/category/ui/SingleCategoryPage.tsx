import React, {useEffect, useState, useContext} from 'react';
import {useParams} from 'react-router-dom';
import {getFilteredCategory, getAllCategories} from '@shared/api/apiUtils/apiUtils.ts';
import {MealsList} from '@shared/ui/MealsList';
import {AboutCategory} from '@shared/ui/AboutCategory';
import {Layout} from '@shared/ui/Layout';
import {CategoryItemTypes} from '@shared/model/appTypes/appTypes.ts';
import {LostConnection} from '@shared/ui/LostConnection';
import {AppContext} from '@app/context/AppContext.ts';

export const SingleCategoryPage: React.FC = () => {
    const {name} = useParams();
    const [meals, setMeals] = useState([]);
    const [categoryInfo, setCategoryInfo] = useState<CategoryItemTypes | null>(
        null
    );
    const [isCategoryExist, setIsCategoryExist] = useState(true);
    const [disconnected, setDisconnected] = useState(false);

    const {setIsLoading} = useContext(AppContext);

    useEffect(() => {
        let cleanupFuse = true;

        setIsLoading(true);

        if (name) {
            getAllCategories()
                .then((data) => {
                    const category = data.categories.filter(
                        (item: CategoryItemTypes) => item.strCategory === name
                    );

                    if (category.length === 0) {
                        cleanupFuse && setIsCategoryExist(false);
                    }

                    cleanupFuse && setCategoryInfo(category[0]);
                    getFilteredCategory(name).then((data) => {
                        cleanupFuse && setMeals(data.meals);
                    });
                })
                .catch((e) => {
                    console.warn(e);
                    setDisconnected(true);
                })
                .finally(() => setIsLoading(false));

            return () => {
                cleanupFuse = false;
            };
        }
    }, [name]);

    if (isCategoryExist === false) {
        return (
            <Layout>
                <h2 className='text-2xl text-center'>There is no {name} category</h2>
            </Layout>
        );
    }

    if (disconnected) {
        return (
            <Layout>
                <LostConnection/>
            </Layout>
        );
    }

    return (
        <Layout>
            {categoryInfo ? <AboutCategory categoryInfo={categoryInfo}/> : null}
            {meals.length !== 0 && <MealsList meals={meals}/>}
        </Layout>
    );
};
