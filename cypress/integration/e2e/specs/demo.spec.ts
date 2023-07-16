import { paymentJourney } from "../journeys/paymentJourney";

describe("Bank payment", () => {
  /**
   * Test Case: Payment Journey
   * This test case covers the process of making a bank payment with Swedbank in Sweden.
   * It includes the following steps:
   * - Navigating to the homepage
   * - Accepting cookies
   * - Navigating to the demo page
   * - Verifying the demo page and selecting bank payment
   * - Filling in the payment form with an amount and email
   * - Choosing Swedbank
   * - Attempting to make the payment
   * - Verifying the error message for unaccepted terms and conditions
   * - Accepting the terms and conditions
   * - Attempting to make the payment again
   * - Verifying that the bank's URL is correct
   * - Revisiting the main page
   * - Ensuring the presence of previous accepted cookies
   */
  it("Performs a bank payment with Swedbank in Sweden", () => {
    paymentJourney();
  });
});
