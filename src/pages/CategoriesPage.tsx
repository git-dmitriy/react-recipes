import {getAllCategories} from '@/api-utils.ts';
import {CategoryList} from '@components/CategoryList';
import {useQuery} from '@tanstack/react-query';
import {Loader} from "@components/Loader";

export const CategoriesPage: React.FC = () => {
    const {status, data, error} = useQuery({
        queryKey: ['categories'], queryFn: async () => {
            const data = await getAllCategories();

            return data.categories;
        }
    })

    if (status === 'pending') {
        return <Loader/>
    }

    if (status === 'error') {
        return <span>Something went wrong: {error.message}</span>
    }

    return (
        <>
            {<CategoryList catalog={data}/>}
        </>
    );
};
