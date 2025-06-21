/// <reference types="cypress"/>

// const { Button } = require("selenium-webdriver");


describe('Automation Test Store', () => {
    it('Login Success | Positive Test Case', () => {
    // Code Cypress
    // Visit Web Page
    cy.visit('https://automationteststore.com/')

    // Assertion Head
    cy.document().should('have.property','charset').and('eq','UTF-8')
    // Assertion Title Text | Memastikan title web
    cy.title().should('include','A place to practice your automation skills!')
    // Assertion URL WEB
    cy.url().should('include','automationteststore')

    // Get Elemen Button and Click dengan css selector
    cy.get('#customer_menu_top > li > a').click()
    // Get Elemen HTML dan input username
    cy.get('input[name="loginname"]').type('reza123');
    // Get Elemen HTML dan input Password
    cy.get('input[name="password"]').type('Dodol1997');
    // Get Element Button and click button
    cy.get('#loginFrm > fieldset > .btn').click()
    //  Assertion selector CSS
    cy.get('#customer_menu_top > :nth-child(1) > .top > .menu_text').should('have.text','Welcome back Reza')


    })

    it.only('Login Failed | Negative Test Case', () => {
    // Code Cypress
    // Visit Web Page
    cy.visit('https://automationteststore.com/')

    // Assertion Head
    cy.document().should('have.property','charset').and('eq','UTF-8')
    // Assertion Title Text | Memastikan title web
    cy.title().should('include','A place to practice your automation skills!')
    // Assertion URL WEB
    cy.url().should('include','automationteststore')

    // Get Elemen Button and Click dengan css selector
    cy.get('#customer_menu_top > li > a').click()
    // Get Elemen HTML dan input username
    cy.get('input[name="loginname"]').type('reza123');
    // Get Elemen HTML dan input Password
    cy.get('input[name="password"]').type('123');
    // Get Element Button and click button
    cy.get('#loginFrm > fieldset > .btn').click()
    // Assertion: Alert error appears
    cy.get('.alert.alert-error.alert-danger') // Div class selector
      .should('exist')
      .and('contain.text', 'Error: Incorrect login or password provided.'); //Menggunakan validasi text yang muncul

    })
})

