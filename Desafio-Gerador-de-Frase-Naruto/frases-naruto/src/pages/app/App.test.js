import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import App from "./App";

test('renders the app with a button, a quote and an image', () =>{
    render(<App />);

    const button = screen.getByRole('button');
    const image = screen.getByRole('img');
    const text = screen.getByText(/Speaker/);

    expect(button).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(text).toBeInTheDocument();
});