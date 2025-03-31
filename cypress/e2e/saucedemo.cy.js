import { faker } from '@faker-js/faker';
import { default as Saucedemo } from './Navigation/Saucedemo.js';
import Login from './Pages/Login.js';
import Inventory from './Pages/Inventory.js';
import Sidebar from './Components/Sidebar.js';
import Checkout from './Pages/Checkout.js';

describe('saucedemos tests', () => {
  beforeEach(() => {
    const saucedemo = new Saucedemo();
    saucedemo.navigate();
  });

  it('standard_user, should be able to login', () => {
    const login = new Login();
    login.signIn('standard_user', 'secret_sauce');

    const inventory = new Inventory();
    inventory.appLogo.should('exist');
  });

  it('locked_out_user, should have helper text', () => {
    const login = new Login();
    login.signIn('locked_out_user', 'secret_sauce');
    
    login.invalidUserHelper.should('exist');
  });

  it('problem_user, should be able to login', () => {
    const login = new Login();
    login.signIn('problem_user', 'secret_sauce');

    const inventory = new Inventory();
    inventory.itemImage.should('exist');
  });

  it('performance_glitch_user, should be able to login', () =>{
    const login = new Login();
    login.signIn('performance_glitch_user', 'secret_sauce');

    const inventory = new Inventory();
    inventory.itemImage.should('exist');
  });

  it('error_user, should be able to login', () =>{
    const login = new Login();
    login.signIn('error_user', 'secret_sauce');

    const inventory = new Inventory();
    inventory.itemImage.should('exist');
  });
  
  it('visual_user, should be able to login', () =>{
    const login = new Login();
    login.signIn('visual_user', 'secret_sauce');

    const inventory = new Inventory();
    inventory.itemImage.should('exist');
  });

  it('should not login with empty credentials', () => {
    const login = new Login();
    login.selectLogin();

    login.invalidUserHelper.should('exist');
  });
    
  it('should not login with invalid credentials', () =>{
    const login = new Login();
    login.signIn('wrong user', 'wrong user');

    login.invalidUserHelper.should('exist');
  });

  it('should be able to logout', () => {
    const login = new Login();
    login.signIn('standard_user', 'secret_sauce');

    const sidebar = new Sidebar();
    sidebar.selectBurgerMenu();
    sidebar.selectLogout();

    login.loginButton.should('exist');
  });

  it('should be able to complete a purchase', () => {
    const login = new Login();
    login.signIn('standard_user', 'secret_sauce');

    const inventory = new Inventory();
    inventory.selectItem4Title();
    inventory.selectAddToCart();

    const sidebar = new Sidebar();
    sidebar.selectCart();

    const checkout = new Checkout();
    checkout.selectCheckout();
    checkout.fillPersonalDataForm(
      faker.person.firstName(), 
      faker.person.lastName(), 
      faker.location.zipCode()
    );
    checkout.selectFinish();

    checkout.completedPurchaseConfirmation.should('exist');
  });

  it('should be able to purchase multiple items', () =>{
    const login = new Login();
    login.signIn('standard_user', 'secret_sauce');

    const inventory = new Inventory();
    inventory.selectAddBackpack();
    inventory.selectAddBikeLight();
    inventory.selectAddBoltShirt();
    inventory.selectAddFleeceJacket();

    const sidebar = new Sidebar();
    sidebar.selectCart();

    const checkout = new Checkout();
    checkout.selectCheckout();
    checkout.fillPersonalDataForm(
      faker.person.firstName(), 
      faker.person.lastName(), 
      faker.location.zipCode()
    );

    checkout.selectFinish();

    checkout.completedPurchaseConfirmation.should('exist');
  });

  it('should display helper on name, lastname and zipcode', () => {
    const login = new Login();
    login.signIn('standard_user', 'secret_sauce');

    const inventory = new Inventory();
    inventory.selectAddBackpack();
    
    const sidebar = new Sidebar();
    sidebar.selectCart();

    const checkout = new Checkout();
    checkout.selectCheckout();
    checkout.fillPersonalDataForm('','','');

    checkout.invalidFormDataHelper.should('exist');
  });
});