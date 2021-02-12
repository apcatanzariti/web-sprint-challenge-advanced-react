import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from './CheckoutForm';
import { act } from "react-dom/test-utils";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    // render the DOM
    render (<CheckoutForm />);

    // query for the element we're looking for
    const checkoutHeader = screen.getByRole('heading', {name: /checkout form/i});

    // assertion
    expect(checkoutHeader).toBeInTheDocument();
});

test("form shows success message on submit with form details", async () => {
        // render the DOM
        render(<CheckoutForm />);

    await act(async () => {
        // query for the inputs and button
        const firstNameInput = screen.getByLabelText(/first name:/i);
        const lastNameInput = screen.getByLabelText(/last name:/i);
        const addressInput = screen.getByLabelText(/address:/i);
        const cityInput = screen.getByLabelText(/city:/i);
        const stateInput = screen.getByLabelText(/state:/i);
        const zipInput = screen.getByLabelText(/zip:/i);
        const checkoutButton = screen.getByRole('button', {name: /checkout/i});
        
        // fill out the form and click the button
        userEvent.type(firstNameInput, 'Anthony');
        userEvent.type(lastNameInput, 'Testperson');
        userEvent.type(addressInput, '123 Main St.');
        userEvent.type(cityInput, 'Testplace');
        userEvent.type(stateInput, 'MA');
        userEvent.type(zipInput, '01234');
        userEvent.click(checkoutButton);
    })
        
        // assert that the success message shows up with correct details
        
});
