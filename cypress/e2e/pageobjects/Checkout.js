class Checkout {
  selectCheckout() {
    cy.get('[data-test="checkout"]').click();
  }

  fillPersonalDataForm(firstName, lastName, zipCode) {
    cy.get('[data-test="firstName"]').type(firstName, { force: true });
    cy.get('[data-test="lastName"]').type(lastName, { force: true });
    cy.get('[data-test="postalCode"]').type(zipCode, { force: true });
    cy.get('[data-test="continue"]').click();
  }

  selectContinue() {
    cy.get('[data-test="continue"]').click();
  }

  selectFinish() {
    cy.get('[data-test="finish"]').click();
  }

  get completedPurchaseConfirmation() {
    return cy.get('[data-test="complete-header"]');
  }

  get invalidFormDataHelper() {
    return cy.get('[data-test="error"]');
  }
}

export default Checkout;
