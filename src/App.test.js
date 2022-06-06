import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders landing text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to the InnovationMC server!/i); 
  expect(linkElement).toBeInTheDocument(); 
}); 