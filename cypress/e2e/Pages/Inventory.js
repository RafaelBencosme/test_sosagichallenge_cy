class Inventory {
    selectItem4Title(){
        cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').click();
    };

    selectAddToCart(){
        cy.get('[data-test="add-to-cart"]').click();
    };

    selectAddBackpack(){
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    };

    selectAddBikeLight(){
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    };

    selectAddBoltShirt(){
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    };

    selectAddFleeceJacket(){
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
    };

    get appLogo(){
        return cy.get('.app_logo');
    };
    
    get itemImage(){
        return cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]');
    };
};

export default Inventory;