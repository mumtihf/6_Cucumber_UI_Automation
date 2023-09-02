const { $ } = require('@wdio/globals')
const Page = require('./page');

class CategoryPage extends Page {
    get btnMenuKategori () {
        return $('//*[@href="/categories"]')
    }

    get btnTambah() {
        return $('//*[@class="chakra-button css-1piskbq"]')
    }

    get inputNama () {
        return $('#nama');
    }

    get btnSimpan () {
        return $('//*[contains(text(),"simpan")]');
    }

    get successAddCategory () {
        return $('//*[contains(text(),"item ditambahkan")]')
    }

    get errorMsgNameIsEmpty () {
        return $('//*[@class="chakra-alert css-qwanz3"]')
    }

    async addCategory(nama) {
        await this.inputNama.setValue(nama)
    }
}

module.exports = new CategoryPage();
