import { CategoryItem } from '@components/CategoryItem';
import { CategoryItemTypes } from '@/appTypes.ts';
// import { motion } from 'framer-motion';

type P = {
    catalog: CategoryItemTypes[];
};

export const CategoryList: React.FC<P> = ({ catalog }) => {
    console.log('render category list');

    const variants = {
        visible: (item: number) => ({
            opacity: 1,
            transition: {
                delay: item * 0.03,
            },
        }),
        hidden: { opacity: 0 },
    };

    return (
        <ul className='mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 justify-items-center gap-5 md:gap-7 xl:max-w-6xl max-w-4xl'>
            {catalog.map((el, idx) => (
                // <motion.li
                //     key={el.idCategory}
                //     className='flex'
                //     variants={variants}
                //     initial='hidden'
                //     animate='visible'
                //     custom={idx}
                // >
                //     <CategoryItem key={el.idCategory} {...el} />
                // </motion.li>
                <li
                    key={el.idCategory}
                    className='flex'
                >
                    <CategoryItem key={el.idCategory} {...el} />
                </li>
            ))}
        </ul>
    );
};
