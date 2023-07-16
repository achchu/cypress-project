import HomePage from "../pages/homePage";
import DemoPage from "../pages/demoPage";
import PaymentPage from "../pages/paymentPage";

//This journey is not linked to a test yet as this is just to show case another example
export function invalidEmailJourney() {
  const invalidEmail = "invalidEmail";
  const amount = Cypress.env("paymentAmount");

  HomePage.visit();
  HomePage.acceptCookies();
  HomePage.navigateToDemo();

  DemoPage.verifyDemoTab();
  DemoPage.selectTryitButton();
  DemoPage.verifyDemoPage();
  DemoPage.selectBankPayment();

  PaymentPage.fillForm(amount, invalidEmail);
  PaymentPage.validateInvalidEmail();
}
