import { paymentJourney } from "../journeys/paymentJourney";
import { invalidEmailJourney } from "../journeys/invalidEmailJourney";

describe("Bank payment", () => {
  it("Performs a bank payment with Swedbank in Sweden", () => {
    paymentJourney();
  });
});
