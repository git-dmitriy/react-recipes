import {vi} from 'vitest';

type RegisterState = {
    offlineReady: boolean;
    needRefresh: boolean;
};

let registerState: RegisterState = {
    offlineReady: false,
    needRefresh: false,
};

export const mockUpdateServiceWorker = vi.fn();
export const mockSetOfflineReady = vi.fn((value: boolean) => {
    registerState.offlineReady = value;
});
export const mockSetNeedRefresh = vi.fn((value: boolean) => {
    registerState.needRefresh = value;
});

export function setRegisterState(state: Partial<RegisterState>) {
    registerState = {...registerState, ...state};
}

export function resetRegisterState() {
    registerState = {offlineReady: false, needRefresh: false};
    mockUpdateServiceWorker.mockReset();
    mockSetOfflineReady.mockClear();
    mockSetNeedRefresh.mockClear();
}

export function useRegisterSW() {
    return {
        offlineReady: [registerState.offlineReady, mockSetOfflineReady] as const,
        needRefresh: [registerState.needRefresh, mockSetNeedRefresh] as const,
        updateServiceWorker: mockUpdateServiceWorker,
    };
}
