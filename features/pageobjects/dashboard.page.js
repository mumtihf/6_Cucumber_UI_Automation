const { $ } = require('@wdio/globals')
const Page = require('./page');

class DashboardPage extends Page {
    get flashAlert () {
        return $('//*[@id="root"]/div/div/div[1]/div/h3');
    }
}

module.exports = new DashboardPage();
