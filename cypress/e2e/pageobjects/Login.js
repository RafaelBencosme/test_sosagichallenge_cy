class Login {
  signIn(username, password) {
    cy.get('[data-test="username"]').type(username, { force: true });
    cy.get('[data-test="password"]').type(password, { force: true });
    cy.get('[data-test="login-button"]').click();
  }

  selectLogin() {
    cy.get('[data-test="login-button"]').click();
  }

  get invalidUserHelper() {
    return cy.get('[data-test="error"]');
  }

  get loginButton() {
    return cy.get('[data-test="login-button"]');
  }
}

export default Login;
