const I = require("../steps_file");
module.exports = {
    openLoginPage() {
        I.amOnPage("https://release-ui.marketcube.io/login");
        I.wait(3);
    },
    clickOnRegisterHereButton() {
        I.click("#registerHere");
    },
    enterEmail() {
        I.fillField("#email","shivali.gautam@successive.tech");
    },
    enterPassword() {
        I.fillField("#password","Shivali@123");
    },
    reEnterPassword() {
        I.fillField("#confirmPassword","Shivali@123");
    },
    clickOnCheckboxButton() {
        //I.chec("//body/div[@id='root']/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/label[1]/span[1]/span[1]");
        I.click("//*[@class='Polaris-Checkbox']");
    },
    clickOnRegisterButton() {
        I.click("#submitButton");
    },
    onLoginPageDashboard() {
        I.wait(6);
        I.seeElement("#primaryActionLogin");
    },
    clickOnRegisterButton() {
        I.click("#submitButton");
    },
    clickOnRegisterButton() {
        I.click("#submitButton");
    },
};
    