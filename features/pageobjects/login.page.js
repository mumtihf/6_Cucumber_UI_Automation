const { $ } = require('@wdio/globals')
const Page = require('./page');

class LoginPage extends Page {
    get inputEmail () {
        return $('#email');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    get errorMsgCredentialNotMatch () {
        return $('//*[contains(text(),"Kredensial yang Anda berikan salah")]')
    }

    async login (email, password) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
