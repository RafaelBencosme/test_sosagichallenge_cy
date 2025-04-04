import { faker } from "@faker-js/faker";
import { default as Saucedemo } from "./pageobjects/Saucedemo.js";
import Login from "./pageobjects/Login.js";
import Inventory from "./pageobjects/Inventory.js";
import Topbar from "./pageobjects/Topbar.js";
import Checkout from "./pageobjects/Checkout.js";

describe("saucedemos tests", () => {
  let login;
  let inventory;
  let topBar;
  let checkout;

  beforeEach(() => {
    const saucedemo = new Saucedemo();
    saucedemo.navigate();

    login = new Login();
    inventory = new Inventory();
    topBar = new Topbar();
    checkout = new Checkout();
  });

  describe("login tests", () => {
    it("standard_user, should be able to login", () => {
      login.signIn("standard_user", "secret_sauce");

      inventory.appLogo.should("exist");
    });

    it("locked_out_user, should have helper text", () => {
      login.signIn("locked_out_user", "secret_sauce");

      login.invalidUserHelper.should("exist");
    });

    it("problem_user, should be able to login", () => {
      login.signIn("problem_user", "secret_sauce");

      inventory.itemImage.should("exist");
    });

    it("performance_glitch_user, should be able to login", () => {
      login.signIn("performance_glitch_user", "secret_sauce");

      inventory.itemImage.should("exist");
    });

    it("error_user, should be able to login", () => {
      login.signIn("error_user", "secret_sauce");

      inventory.itemImage.should("exist");
    });

    it("visual_user, should be able to login", () => {
      login.signIn("visual_user", "secret_sauce");

      inventory.itemImage.should("exist");
    });

    it("should not login with empty credentials", () => {
      login.selectLogin();

      login.invalidUserHelper.should("exist");
    });

    it("should not login with invalid credentials", () => {
      login.signIn("wrong user", "wrong user");

      login.invalidUserHelper.should("exist");
    });

    it("should be able to logout", () => {
      login.signIn("standard_user", "secret_sauce");

      topBar.logout();

      login.loginButton.should("exist");
    });
  });
  describe("checkout tests", () => {
    it("should be able to complete a purchase", () => {
      login.signIn("standard_user", "secret_sauce");

      inventory.selectItem4Title();
      inventory.selectAddToCart();

      topBar.selectCart();

      checkout.selectCheckout();
      checkout.fillPersonalDataForm(
        faker.person.firstName(),
        faker.person.lastName(),
        faker.location.zipCode()
      );
      checkout.selectFinish();

      checkout.completedPurchaseConfirmation.should("exist");
    });

    it("should be able to purchase multiple items", () => {
      login.signIn("standard_user", "secret_sauce");

      inventory.selectAddBackpack();
      inventory.selectAddBikeLight();
      inventory.selectAddBoltShirt();
      inventory.selectAddFleeceJacket();

      topBar.selectCart();

      checkout.selectCheckout();
      checkout.fillPersonalDataForm(
        faker.person.firstName(),
        faker.person.lastName(),
        faker.location.zipCode()
      );
      checkout.selectFinish();

      checkout.completedPurchaseConfirmation.should("exist");
    });

    it("should display helper on name, lastname and zipcode", () => {
      login.signIn("standard_user", "secret_sauce");

      inventory.selectAddBackpack();

      topBar.selectCart();

      checkout.selectCheckout();
      checkout.selectContinue();

      checkout.invalidFormDataHelper.should("exist");
    });
  });
});