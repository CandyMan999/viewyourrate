import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Loan Estimate Upload call to action", () => {
  render(<App />);
  const uploadNavLink = screen.getByText(/Loan Estimate Upload/i);
  expect(uploadNavLink).toBeInTheDocument();
});
