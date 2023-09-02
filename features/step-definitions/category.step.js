const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@wdio/globals')

const LoginPage = require('../pageobjects/login.page.js');
const CategoryPage = require('../pageobjects/category.page.js');

Given(/^User open kasirAja website$/, async () => {
    await LoginPage.open()
    await expect(browser).toHaveTitle('kasirAja')
});

When(/^User login with (.*) and (.*)$/, async (email, password) => {
    await LoginPage.login(email, password)
});

When(/^User on dashboard page and wants to add category$/, async () => {
    await expect(browser).toHaveUrl('https://kasirdemo.belajarqa.com/dashboard')
});

When(/^User click Kategori menu$/, async () => {
    await CategoryPage.btnMenuKategori.click()
});

When(/^User click Tambah button$/, async () => {
    await CategoryPage.btnTambah.click()
});

When(/^User input (.*) to nama field$/, async (nama) => {
    await CategoryPage.addCategory(nama)
});

When(/^User click Simpan button$/, async () => {
    await CategoryPage.btnSimpan.click()
});

Then(/^User should see a message saying (.*)$/, async (message) => {
    if(message === '"name" is not allowed to be empty') {
        await expect(CategoryPage.errorMsgNameIsEmpty).toBeExisting();
        await expect(CategoryPage.errorMsgNameIsEmpty).toHaveTextContaining(message);
    } else {
        await expect(CategoryPage.successAddCategory).toBeDisplayed();
        await expect(CategoryPage.successAddCategory).toHaveTextContaining(message);
    }
});

