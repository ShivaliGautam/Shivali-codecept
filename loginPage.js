const I = require("../steps_file");
const { loginLocator } = require("../locator/loginLocator");
const { loginData } = require("../data/loginData");

module.exports = {
    openLoginPage() {
        I.amOnPage(loginData.url);
        I.wait(3);
    },
    enterEmail() {
        I.fillField(loginLocator.email,loginData.email);
    },
    enterPassword() {
        I.fillField(loginLocator.password,loginData.password);
    },
    clickOnLoginButton() {
        I.click(loginLocator.loginButton);
    },
    onDashboard() {
        I.wait(6);
        I.seeElement(loginLocator.onDashboard);
    },
    enterInvalidPassword() {
        I.fillField(loginData.invalidPassword);
    },
    clickOnLoginButton() {
        I.click(loginLocator.loginButton);
    },
    errorOccure() {
        I.seeElement(loginLocator.label);
    }
};
    
