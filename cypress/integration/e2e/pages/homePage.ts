class HomePage {
  visit() {
    const url = Cypress.env("e2eBaseUrl");
    cy.visit(url);
  }

  acceptCookies() {
    // check if cookie banner exists
    cy.get('[data-testid="CookieBanner-accept-all"]').then(($button) => {
      if ($button.is(":visible")) {
        // Click on the accept button in the cookie banner if it exists
        $button.click();
      }
    });
  }

  navigateToDemo() {
    cy.get('[data-testid="navbar-demo"]').click();
  }

  verifyCookiePresence() {
    cy.getCookie("__cf_bm").should("exist");
  }
}

export default new HomePage();
