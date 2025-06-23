/// <reference types="cypress"/>

// const { Button } = require("selenium-webdriver");


describe('Automation Test Store', () => {

    it.only('Registrasi Akun | Positive Test Case', () => {
    // Code Cypress
    // Visit Web Page
      cy.visit('https://automationteststore.com/')

    // Assertion Head
      cy.document().should('have.property','charset').and('eq','UTF-8')
    // Assertion Title Text | Memastikan title web
      cy.title().should('include','A place to practice your automation skills!')
    // Assertion URL WEB
      cy.url().should('include','automationteststore')

    // Get Elemen "Login Or Registrasi" Button and Click dengan css selector
      cy.get('#customer_menu_top > li > a').click()
    // Get Elemen Option Account Login dengan
      cy.get('#accountFrm > fieldset > .btn').click()
    // Assertion Text
      cy.get('p').should('contain.text','If you already have an account with us, please login at the') // Contain.text karna berisi nilai langsung
    // Input field firstname | class 

    // YOUR PERSONAL DETAILS
      cy.get('input[name="firstname"]').type('user')
    // Input field lastname | class
      cy.get('input[name="lastname"]').type('123')
    // Input Email address
      cy.get('#AccountFrm_email').type('akunbisnis0101@gmail.com')
    // Input number telephone | Non Mandatory field
      cy.get('input[name="telephone"]').type('088213247927')
    // Input Fax | Non Mandatory

    // YOUR ADDRESS
    // Input option dropdown | Harus di run duluan karna agar field Region / State nya mendeteksi wilayah 
      cy.get('#AccountFrm_country_id').select('Indonesia')
    // Input Company | Non Mandatory
    // Input Address 1 field
      cy.get('input[name="address_1"]').type('Perum Mega Sentul jalan Bougenville Blok B No 2')
    // Input Address 2 field | Non Mandatory
    // Input city field
      cy.get('input[name="city"]').type('Bogor')
    // Menunggu field terisi
      cy.wait(1000)
    // Input field Dropdown   
      cy.get('#AccountFrm_zone_id').select('Jawa Barat')
    // INput Postal Code / Kode Pos
      cy.get('input[name="postcode"]').type('16710')

    // LOGIN DETAILS
    // Input Login Name Field 
      cy.get('input[name="loginname"]').type('phonna123')
    // Input Password Field
      cy.get('input[name="password"]').type('Dodol1990')
    // Input Confirm Password Field 2x
      cy.get('input[name="confirm"]').type('Dodol1990')

    // NEWSLATTER
    // Pilih Sesuai kondisi Yes or No 
      cy.get('input[type="radio"][value="1"]').check();
    // Pilih checlist radiobutton | Mandatory
      cy.get('input[type="checkbox"]').check();
    // Klik button Continue | Selector ID
      // cy.get('.col-md-2 > .btn').click()
    // Assertion Text success Login

    // Screenshot Validasi field Mandatory terisi
      cy.screenshot('screenshot/Mandatory-Field-Registration')


    })




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
    // Validasi Hasil Screenshoot masuk kedalam folder
      cy.screenshot('screenshot/Positive-Case-TrueAccount');

    })



    it('Login Failed | Negative Test Case, Failed password', () => {
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
    // Validasi Hasil Screenshoot masuk kedalam folder screenshot
      cy.screenshot('screenshot/Negative-Case-FailedPassword');

    })
})

