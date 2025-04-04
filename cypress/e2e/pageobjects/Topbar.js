class Topbar {
  logout() {
    cy.get("#react-burger-menu-btn").click();
    cy.get('[data-test="logout-sidebar-link"]').click({ timeout: 10000 });
  }

  selectCart() {
    cy.get('[data-test="shopping-cart-link"]').click();
  }
}

export default Topbar;