import {Link} from 'react-router-dom';
import {CategoryItemTypes} from '@/appTypes.ts';

export const CategoryItem: React.FC<CategoryItemTypes> = ({
                                                              strCategory,
                                                              strCategoryThumb,
                                                              strCategoryDescription,
                                                          }) => {
    return (
        <article
            className='grid rounded-3xl border border-gray-200 dark:border-gray-900 overflow-hidden bg-white dark:bg-orange-100 dark:text-gray-900 sm:mx-0 min-h-170p'>
            <Link
                to={`/category/${strCategory}`}
                className='h-full grid grid-rows-1 grid-cols-5 hover:opacity-90 transition-opacity'
            >
                <div className='col-span-2 bg-white relative'>
                    <img
                        className='h-full object-cover'
                        width='320'
                        height='200'
                        src={strCategoryThumb}
                        alt={strCategory}
                        loading="lazy"
                    />
                </div>
                <div className='col-span-3 flex flex-col items-start mx-4 my-4'>
                    <h1 className='text-xl font-semibold mb-5 sm:mb-0'>{strCategory}</h1>
                    <p className='text-sm sm:text-md line-clamp-5'>
                        {strCategoryDescription}
                    </p>
                </div>
            </Link>
        </article>
    );
};
