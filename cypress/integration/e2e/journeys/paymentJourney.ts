import HomePage from "../pages/homePage";
import DemoPage from "../pages/demoPage";
import PaymentPage from "../pages/paymentPage";

export function paymentJourney() {
  const amount = Cypress.env("paymentAmount");
  const email = Cypress.env("email");

  HomePage.visit();
  HomePage.acceptCookies();
  HomePage.navigateToDemo();

  DemoPage.verifyDemoTab();
  DemoPage.selectTryitButton();
  DemoPage.verifyDemoPage();
  DemoPage.selectBankPayment();

  PaymentPage.fillForm(0.01, "achchu123@gmail.com");
  PaymentPage.chooseBank();
  PaymentPage.clickPay();
  PaymentPage.verifyErrorMessage();
  PaymentPage.acceptTermsAndConditions();
  PaymentPage.clickPay();
  PaymentPage.verifyBankUrl();

  HomePage.visit(); // Revisit the home page
  HomePage.verifyCookiePresence(); // Assert the presence of previously accepted cookies
}
