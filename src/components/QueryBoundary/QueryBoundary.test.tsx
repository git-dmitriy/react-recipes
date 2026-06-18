import {QueryBoundary} from './QueryBoundary';
import {render, screen} from '@testing-library/react';
import type {UseQueryResult} from '@tanstack/react-query';
import {ApiError} from '@/api-utils';
import {beforeEach, describe, expect, it, vi} from 'vitest';

vi.mock('@/hooks/useOnlineStatus', () => ({
    useOnlineStatus: vi.fn(() => true),
}));

import {useOnlineStatus} from '@/hooks/useOnlineStatus';

function createQueryResult<T>(overrides: Partial<UseQueryResult<T, Error>>): UseQueryResult<T, Error> {
    return {
        data: undefined,
        error: null,
        isError: false,
        isPending: false,
        isSuccess: false,
        status: 'pending',
        ...overrides,
    } as UseQueryResult<T, Error>;
}

describe('QueryBoundary', () => {
    beforeEach(() => {
        vi.mocked(useOnlineStatus).mockReturnValue(true);
    });

    it('renders loading state', () => {
        render(
            <QueryBoundary query={createQueryResult({isPending: true, status: 'pending'})}>
                {() => <div>Content</div>}
            </QueryBoundary>,
        );

        expect(screen.getByRole('alert')).toBeInTheDocument();
    });

    it('renders error fallback', () => {
        render(
            <QueryBoundary
                query={createQueryResult({
                    isError: true,
                    isPending: false,
                    status: 'error',
                    error: new Error('Failed'),
                })}
                errorFallback={(error) => <span>Error: {error.message}</span>}
            >
                {() => <div>Content</div>}
            </QueryBoundary>,
        );

        expect(screen.getByText('Error: Failed')).toBeInTheDocument();
    });

    it('renders children with data', () => {
        render(
            <QueryBoundary
                query={createQueryResult({
                    isSuccess: true,
                    isPending: false,
                    status: 'success',
                    data: ['Beef'],
                })}
            >
                {(data) => <div>Categories: {data.join(', ')}</div>}
            </QueryBoundary>,
        );

        expect(screen.getByText('Categories: Beef')).toBeInTheDocument();
    });

    it('renders empty fallback when data is null', () => {
        render(
            <QueryBoundary
                query={createQueryResult({
                    isSuccess: true,
                    isPending: false,
                    status: 'success',
                    data: null,
                })}
                emptyFallback={<span>Empty</span>}
            >
                {() => <div>Content</div>}
            </QueryBoundary>,
        );

        expect(screen.getByText('Empty')).toBeInTheDocument();
    });

    it('renders LostConnection for offline network errors without custom fallback', () => {
        vi.mocked(useOnlineStatus).mockReturnValue(false);

        render(
            <QueryBoundary
                query={createQueryResult({
                    isError: true,
                    isPending: false,
                    status: 'error',
                    error: new ApiError('Network request failed'),
                })}
            >
                {() => <div>Content</div>}
            </QueryBoundary>,
        );

        expect(screen.getByText('The Internet connection is lost')).toBeInTheDocument();
    });
});
