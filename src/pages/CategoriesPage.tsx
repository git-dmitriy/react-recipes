import {getAllCategories} from '@/api-utils';
import {CategoryList} from '@components/CategoryList';
import {useQuery} from '@tanstack/react-query';
import {Loader} from '@components/Loader';

export const CategoriesPage: React.FC = () => {
    const {status, data, error} = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const response = await getAllCategories();
            if (!response?.categories || !Array.isArray(response.categories)) {
                throw new Error('Invalid categories response');
            }
            return response.categories;
        },
    });

    if (status === 'pending') {
        return <Loader/>;
    }

    if (status === 'error') {
        const message = error instanceof Error ? error.message : 'Unknown error';
        return (
            <div className="h-full grid place-items-center">
                <span className="text-center">Something went wrong: {message}</span>
            </div>
        );
    }

    if (!data || data.length === 0) {
        return (
            <div className="h-full grid place-items-center">
                <span className="text-center">No categories available.</span>
            </div>
        );
    }

    return (
        <>
            <CategoryList catalog={data}/>
        </>
    );
};
