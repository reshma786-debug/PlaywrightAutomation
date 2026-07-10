const {test, expect}= require('@playwright/test')
const {hello, helloworld}=require('./demo/hello')

console.log (hello());

test('My first test', async({page})=>
{
    await  page.goto('https://google.com')
})