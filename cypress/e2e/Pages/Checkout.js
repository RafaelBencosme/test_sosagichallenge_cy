class Checkout{
    selectCheckout(){
        cy.get('[data-test="checkout"]').click();
    };

    fillPersonalDataForm(firstName, lastName, zipCode){
        cy.get('[data-test="firstName"]').type(firstName);
        cy.get('[data-test="lastName"]').type(lastName);
        cy.get('[data-test="postalCode"]').type(zipCode);
        cy.get('[data-test="continue"]').click();
    };

    selectFinish(){
        cy.get('[data-test="finish"]').click();
    };

    get completedPurchaseConfirmation(){
        return cy.get('[data-test=:"finish]').click();
    };

    get invalidFormDataHelper(){
        cy.get('[data-test="error"]');
    };
};

export default Checkout;