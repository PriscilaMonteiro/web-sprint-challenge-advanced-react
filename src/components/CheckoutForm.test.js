import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";


// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
  render(<CheckoutForm/>);
});

test("shows success message on submit with form details", async () => {
  render(<CheckoutForm/>);
  const checkoutBtn = screen.getByRole('button');
  userEvent.click(checkoutBtn);

  await waitFor(()=>{
    const showSuccessMessage = screen.queryByTestId('successMessage');
    expect (showSuccessMessage).toBeInTheDocument();

  });

});

test("when all form inputs are filled with valid data, a success message appears with form details", async () => {
  render(<CheckoutForm />);

  const firstNameInput = screen.getByLabelText("First Name:");
  const lastNameInput = screen.getByLabelText("Last Name:");
  const addressInput = screen.getByLabelText("Address:");
  const cityInput = screen.getByLabelText("City:");
  const stateInput = screen.getByLabelText("State:");
  const zipInput = screen.getByLabelText("Zip:");
  const checkoutBtn = screen.getByRole("button");

  userEvent.type(firstNameInput, "Test");
  userEvent.type(lastNameInput, "testing");
  userEvent.type(addressInput, "1");
  userEvent.type(cityInput, "2");
  userEvent.type(stateInput, "3");
  userEvent.type(zipInput, "4");
  userEvent.click(checkoutBtn);
   

  await waitFor(()=>{
    const showSuccessMessage = screen.queryByTestId('successMessage');
    expect (showSuccessMessage).toBeInTheDocument();

  });

});
