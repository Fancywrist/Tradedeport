import TestActions from '../../support/PageResource/pageActions'
const test = new TestActions()

context('Test Landing Page', ()=>{

    
    it ('Buy Moisturizers', ()=>{
        cy.visit('/');
     cy.fixture("shoppingCart").then((em)=>{
       test.pageWait(em.temp);
       cy.wait(3000);
       test.clickElement(em.mosturizers);
       test.viewElementText(em.emptyCart,em.empty);
       test.clickElement(em.emmanualAV);
       test.viewElementText(em.emptyCart,em.item);
       test.clickElement(em.viewCart);
       test.clickElement(em.payCard);
       test.pageWait(em.testMode);
       //test.typeAValue(em.email,em.emailValue);
       //test.typeAValue(em.cardNumber,em.cardValue);
       //test.typeAValue(em.Date,em.dateVAlue);
       //test.typeAValue(em.CVC,em.cvcValue);
       
        })
    })

    it ('Buy Sunscreens', ()=>{
        cy.visit('/');
     cy.fixture("shoppingCart").then((em)=>{
       test.pageWait(em.temp);
       cy.wait(3000);
       test.clickElement(em.sunScreens);
       test.viewElementText(em.emptyCart,em.empty);
       test.clickElement(em.paulMag);
       test.viewElementText(em.emptyCart,em.item);
       test.clickElement(em.viewCart);
       test.clickElement(em.payCard);
       test.pageWait(em.testMode);
      // test.typeAValue(em.email,em.emailValue);
       //test.typeAValue(em.cardNumber,em.cardValue);
      // test.typeAValue(em.Date,em.dateVAlue);
       //test.typeAValue(em.CVC,em.cvcValue);
    })
})
})