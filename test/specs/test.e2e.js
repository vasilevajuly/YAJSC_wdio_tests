import { expect, browser, $ } from '@wdio/globals'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await browser.url(`https://www.saucedemo.com/`)

        await $('#user-name').setValue('standard_user')
        await $('#password').setValue('secret_sauce')
        await $('#login-button').waitForEnabled()
        await $('#login-button').click()
    })

//Verifying that some elements are present on website = User is logged in
describe('User is logged in', () => {
    it('some elements should be found', async () => {
        await expect($('#shopping_cart_container')).toBeExisting()
        await expect($('.title')).toBeExisting() 
    })
    })

//Verifying that there one more than 1 product on the page
describe('More than 1 product', () => {
    it('more than one product on the page', async () => {
        const productList = await $$('.inventory_item')
        expect(productList.length).toBeGreaterThan(1)
    })
})
})

