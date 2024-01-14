import {Link} from 'react-router-dom';
// import LazyLoad from 'react-lazyload';
import {CategoryItemTypes} from '@/appTypes.ts';

export const CategoryItem: React.FC<CategoryItemTypes> = ({
                                                              strCategory,
                                                              strCategoryThumb,
                                                              strCategoryDescription,
                                                          }) => {
    return (
        <article
            className='rounded-3xl border border-gray-200 dark:border-gray-900 overflow-hidden bg-white dark:bg-orange-100 dark:text-gray-900 sm:mx-0 min-h-170p'>
            <Link
                to={`/category/${strCategory}`}
                className='h-full flex hover:opacity-90 transition-opacity'
            >
                <div className='w-2/5 sm:w-2/4 bg-white relative'>
                    {/*<LazyLoad*/}
                    {/*    height={180}*/}
                    {/*    offset={400}*/}
                    {/*    once*/}
                    {/*    classNamePrefix='h-full bg-gray-200 '*/}
                    {/*>*/}
                    <img
                        className='h-full object-cover'
                        width='320'
                        height='200'
                        src={strCategoryThumb}
                        alt={strCategory}
                    />
                    {/*</LazyLoad>*/}
                </div>
                <div className='w-3/5 sm:w-2/4 flex flex-col items-start mx-4 my-4'>
                    <h1 className='text-xl font-semibold mb-5 sm:mb-0'>{strCategory}</h1>
                    <p className='text-sm sm:text-md'>
                        {strCategoryDescription.length > 50
                            ? strCategoryDescription.slice(0, 120) + '...'
                            : strCategoryDescription}
                    </p>
                </div>
            </Link>
        </article>
    );
};
