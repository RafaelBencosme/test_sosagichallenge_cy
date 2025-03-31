class Sidebar{
    selectBurgerMenu(){
        cy.get('#react-burger-menu-btn').click();
    };

    selectLogout(){
        cy.get('[data-test="logout-sidebar-link"]').click({ timeout : 10000 });
    };
    
    selectCart(){
        cy.get('[data-test="shopping-cart-link"]').click();
    }
};

export default Sidebar;