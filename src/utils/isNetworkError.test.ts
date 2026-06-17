import {ApiError} from '@/api-utils';
import {describe, expect, it} from 'vitest';
import {isNetworkError} from './isNetworkError';

describe('isNetworkError', () => {
    it('returns true for ApiError without status', () => {
        expect(isNetworkError(new ApiError('Network request failed'))).toBe(true);
    });

    it('returns false for ApiError with HTTP status', () => {
        expect(isNetworkError(new ApiError('Request failed', 404))).toBe(false);
    });

    it('returns true for fetch TypeError', () => {
        expect(isNetworkError(new TypeError('Failed to fetch'))).toBe(true);
    });

    it('returns false for generic errors', () => {
        expect(isNetworkError(new Error('Something else'))).toBe(false);
    });
});
