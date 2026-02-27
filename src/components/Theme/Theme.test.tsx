import {Theme} from './Theme';
import {useAppStore} from '@/store/useAppStore';
import {render} from '@testing-library/react';
import {it, expect, beforeEach} from 'vitest';

beforeEach(() => {
    useAppStore.setState({theme: 'light', favorites: [], isLoading: false});
});

it('should render html without classes', () => {
    useAppStore.setState({theme: 'light'});
    render(<Theme/>);
    expect(document.documentElement.getAttribute('class')).not.toBe('dark');
});

it("should add 'dark' class to html", () => {
    useAppStore.setState({theme: 'dark'});
    render(<Theme/>);
    expect(document.documentElement.getAttribute('class')).toBe('dark');
});
