import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

test('SearchBar renders correctly', () => {
    render(<SearchBar />);
    const placeholder = screen.getByPlaceholderText(/Search for Track or Artist/i);

    expect(placeholder).toBeInTheDocument();
});