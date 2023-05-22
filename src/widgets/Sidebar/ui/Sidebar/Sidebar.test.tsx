import { fireEvent, screen } from '@testing-library/react';

import { renderWithTranslation } from 'shared/lib/test/renderWithTranslation';

import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('Test is sidebar in the document', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Test sidebar collapsed', () => {
        renderWithTranslation(<Sidebar />);
        const toggleButton = screen.getByTestId('sidebar-toggle');
        fireEvent.click(toggleButton);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
