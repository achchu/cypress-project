class DemoPage {
  verifyDemoTab() {
    cy.url().should("include", "bank-payment-flows");
  }

  selectTryitButton() {
    //Cypress doesn't support multiple tabs so i've done this so this doesn't click and open a new tab
    cy.get('[data-testid="visit-demo-page-button"]')
      .invoke("removeAttr", "target")
      .click()
      .url()
      .should("include", "demo.eu");
  }

  verifyDemoPage() {
    // Check for the presence of the title element on the demo page.
    cy.get('[data-testid="welcome-block-title"]').should("be.visible");
  }

  selectBankPayment() {
    cy.get('[data-testid="bank-payment-btn"]').click();
  }
}

export default new DemoPage();
