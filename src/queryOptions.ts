import { getAllCategories } from '@/api-utils';
import type { CategoryItemTypes } from '@/appTypes';

export const categoriesQueryOptions = {
    queryKey: ['categories'] as const,
    queryFn: async (): Promise<CategoryItemTypes[]> => {
        const response = await getAllCategories();
        if (!response?.categories || !Array.isArray(response.categories)) {
            throw new Error('Invalid categories response');
        }
        return response.categories;
    },
};
