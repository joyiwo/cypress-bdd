const URL = 'https://www.saucedemo.com/'
const USERNAME = '#user-name'
const PASSWORD = '#password'
const signIn = '#login-button'

class LoginPage{
    static visit() {
        cy.visit(URL)
    }

    static fillUsername(username) {
        cy.get(USERNAME).type(username)
    }

    static fillPassword(password) {
        cy.get(PASSWORD).type(password)
    }

    static signIn() {
        cy.get(signIn).click()
    }
}

export default LoginPage