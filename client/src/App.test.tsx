import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Header from './components/header/Header';

test('renders learn react link', () => {
    render(<Header />);
    const headerText = screen.getByText('CraftQL');
    expect(headerText).toBeInTheDocument();
});
