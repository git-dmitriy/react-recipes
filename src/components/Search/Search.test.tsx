import {Search} from './Search';
import {render, screen, fireEvent} from '@testing-library/react';
import {it, expect, vi, beforeEach, describe} from 'vitest';

const mockNavigate = vi.fn();

vi.mock('react-router-dom', async (importOriginal) => {
    const actual = await importOriginal<typeof import('react-router-dom')>();
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});

describe('Search', () => {
    beforeEach(() => {
        mockNavigate.mockClear();
    });

    it('navigates with encoded search param on submit', () => {
        render(<Search/>);

        fireEvent.change(screen.getByRole('searchbox'), {
            target: {value: 'Chicken & Rice'},
        });
        fireEvent.submit(screen.getByRole('searchbox').closest('form')!);

        expect(mockNavigate).toHaveBeenCalledWith({
            pathname: '/recipes',
            search: 'search=Chicken+%26+Rice',
        });
    });

    it('does not navigate for empty query', () => {
        render(<Search/>);

        fireEvent.submit(screen.getByRole('searchbox').closest('form')!);

        expect(mockNavigate).not.toHaveBeenCalled();
    });

    it('clears input after successful search', () => {
        render(<Search/>);

        const input = screen.getByRole('searchbox') as HTMLInputElement;
        fireEvent.change(input, {target: {value: 'Pasta'}});
        fireEvent.click(screen.getByRole('button', {name: 'Search'}));

        expect(input.value).toBe('');
    });
});
