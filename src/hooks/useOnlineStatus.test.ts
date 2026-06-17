import {renderHook, act} from '@testing-library/react';
import {describe, expect, it, vi} from 'vitest';
import {useOnlineStatus} from './useOnlineStatus';

describe('useOnlineStatus', () => {
    it('returns initial online status', () => {
        vi.stubGlobal('navigator', {...navigator, onLine: true});
        const {result} = renderHook(() => useOnlineStatus());
        expect(result.current).toBe(true);
    });

    it('updates when browser goes offline and online', () => {
        vi.stubGlobal('navigator', {...navigator, onLine: true});
        const {result} = renderHook(() => useOnlineStatus());

        act(() => {
            vi.stubGlobal('navigator', {...navigator, onLine: false});
            window.dispatchEvent(new Event('offline'));
        });
        expect(result.current).toBe(false);

        act(() => {
            vi.stubGlobal('navigator', {...navigator, onLine: true});
            window.dispatchEvent(new Event('online'));
        });
        expect(result.current).toBe(true);
    });
});
