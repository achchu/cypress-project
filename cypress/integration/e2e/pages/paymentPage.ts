class PaymentPage {
  fillForm(amount, email) {
    cy.get('[data-testid="country-dropdown-btn"]').click();
    cy.get('[data-testid="sweden-option"]').click();
    cy.get('[data-testid="amount-input"]').type(amount);
    cy.get('[data-testid="email-input"]').type(email);
  }

  chooseBank() {
    cy.get('[for=":rm:"]').click();
  }

  verifyErrorMessage() {
    cy.get("#\\:rj\\:")
      .should("be.visible")
      .and("have.css", "color", "rgb(255, 59, 48)")
      .and(
        "contain",
        "You have to agree to the terms and conditions and privacy policy"
      );
  }

  acceptTermsAndConditions() {
    cy.get('[data-testid="checkmark-icon"]').click();
  }

  clickPay() {
    cy.get('[data-testid="bank-payment-form"] > ._wrapper_fw6s8_1').click();
  }

  verifyBankUrl() {
    const swedbankUrl = Cypress.env("bankUrls").Swedbank;

    // Start listening to all network requests
    cy.intercept(swedbankUrl + "*").as("redirectToBank");

    // Wait for the request to the Swedbank URL to finish
    cy.wait("@redirectToBank").then((interception) => {
      // Assert that the request was made to the Swedbank URL
      expect(interception.request.url).to.include("swedbank");
    });
  }

  //Here's some additional extr validations that could be added. I've just added the shell of the pageObjects here
  validateInvalidEmail() {
    const invalidEmail = "invalidEmail";
    cy.get('[data-testid="email-input"]').type(invalidEmail);
    cy.get(".email-error") // This should be the actual selector of the error message
      .should("be.visible")
      .and("contain", "Please enter a valid email address");
  }

  validateEmptyAmount() {
    cy.get('[data-testid="amount-input"]').clear();
    cy.get(".amount-error") // This should be the actual selector of the error message
      .should("be.visible")
      .and("contain", "Amount cannot be empty");
  }

  verifyLoadingState() {
    cy.get(".loading") // This should be the actual selector of the loading element
      .should("be.visible");
  }

  checkRedirectStatus() {
    const swedbankUrl = Cypress.env("bankUrls").Swedbank;

    cy.intercept(swedbankUrl + "*").as("redirectToBank");
    cy.wait("@redirectToBank").then((interception) => {
      expect(interception.response.statusCode).to.equal(200);
    });
  }

  verifyUIElements() {
    cy.get('[data-testid="country-dropdown-btn"]').should("be.visible");
    cy.get('[data-testid="amount-input"]').should("be.visible");
    cy.get('[data-testid="email-input"]').should("be.visible");
    cy.get('[data-testid="bank-payment-form"] > ._wrapper_fw6s8_1').should(
      "be.visible"
    );
  }
}

export default new PaymentPage();
