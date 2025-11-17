<<<<<<< HEAD
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
=======
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Loan Estimate Upload call to action", () => {
  render(<App />);
  const uploadNavLink = screen.getByText(/Loan Estimate Upload/i);
  expect(uploadNavLink).toBeInTheDocument();
>>>>>>> c623bce (Implement loan estimate upload feature (clean))
});
