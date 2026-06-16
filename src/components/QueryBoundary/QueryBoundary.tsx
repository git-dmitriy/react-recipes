import type {ReactNode} from 'react';
import type {UseQueryResult} from '@tanstack/react-query';
import {Loader} from '@components/Loader';

type QueryBoundaryProps<T> = {
    query: UseQueryResult<T, Error>;
    loading?: ReactNode;
    errorFallback?: ReactNode | ((error: Error) => ReactNode);
    emptyFallback?: ReactNode;
    children: (data: T) => ReactNode;
};

function renderFallback(
    fallback: ReactNode | ((error: Error) => ReactNode) | undefined,
    error: Error,
    defaultMessage: string,
): ReactNode {
    if (typeof fallback === 'function') {
        return fallback(error);
    }
    if (fallback !== undefined) {
        return fallback;
    }
    return (
        <div className="h-full grid place-items-center">
            <span className="text-center">{defaultMessage}</span>
        </div>
    );
}

export function QueryBoundary<T>(
    {
        query,
        loading = <Loader/>,
        errorFallback,
        emptyFallback,
        children,
    }: QueryBoundaryProps<T>) {
    if (query.isPending) {
        return loading;
    }

    if (query.isError) {
        return renderFallback(errorFallback, query.error, 'Something went wrong');
    }

    if (query.data == null) {
        return emptyFallback ?? (
            <div className="h-full grid place-items-center">
                <span className="text-center">No data available.</span>
            </div>
        );
    }

    return children(query.data);
}
