

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('[data-automation-id="username-input"]');
    }

    get inputPassword () {
        return $('[data-automation-id="password-input"]');
    }

    get btnSubmit () {
        return $('[data-automation-id="login-button"]');
    }

    get invalidCredentialError () {
        return $('body > div.humane.humane-jackedup-error.humane-animate');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('dashboard/login');
    }
}

export default new LoginPage();
