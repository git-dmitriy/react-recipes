import {ApiError} from '@/api-utils';

export function isNetworkError(error: unknown): boolean {
    if (error instanceof ApiError) {
        return error.status === undefined;
    }

    return error instanceof TypeError;
}
