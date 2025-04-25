import React, {useEffect, useState, useContext} from 'react';
import {useParams} from 'react-router-dom';
import {getFilteredCategory, getAllCategories} from '@/api-utils.ts';
import {MealsList} from '@components/MealsList';
import {AboutCategory} from '@components/AboutCategory';
import {CategoryItemTypes} from '@/appTypes';
import {AppContext} from '@context/AppContext';

export const SingleCategoryPage: React.FC = () => {
    const {name} = useParams();
    const [meals, setMeals] = useState([]);
    const [categoryInfo, setCategoryInfo] = useState<CategoryItemTypes | null>(
        null
    );
    const [isCategoryExist, setIsCategoryExist] = useState(true);

    const {setIsLoading} = useContext(AppContext);

    useEffect(() => {

        setIsLoading(true);

        if (name) {
            getAllCategories()
                .then((data) => {
                    const category = data.categories.filter(
                        (item: CategoryItemTypes) => item.strCategory === name
                    );

                    if (category.length === 0) {
                        setIsCategoryExist(false);
                    }

                    setCategoryInfo(category[0]);
                    getFilteredCategory(name).then((data) => setMeals(data.meals));
                })
                .catch((e) => {
                    console.warn(e);
                })
                .finally(() => setIsLoading(false));

            return () => {
            };
        }
    }, [name]);

    if (isCategoryExist === false) {
        return (
            <div className="h-full grid place-items-center">
                <h2 className='text-2xl text-center'>There is no such category "{name}"</h2>
            </div>
        );
    }

    return (
        <>
            {categoryInfo ? <AboutCategory categoryInfo={categoryInfo}/> : null}
            {meals.length !== 0 && <MealsList meals={meals}/>}
        </>
    );
};
