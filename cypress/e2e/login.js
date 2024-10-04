import LoginPage from './login.page.js'

const {Given, When, Then} = require('@badeball/cypress-cucumber-preprocessor')

Given('I am on the login page of SauceDemo', () => {
    LoginPage.visit()

})

When('I enter a valid username and valid password', () => {
    LoginPage.fillUsername('standard_user')
    LoginPage.fillPassword('secret_sauce')
    LoginPage.signIn()

})

Then('I should be redirected to the inventory page', () => {
    cy.get('.title').should('be.visible')

})