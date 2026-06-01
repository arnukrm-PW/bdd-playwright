const{locator,test,expect}=require('@playwright/test')

class BasePage {

constructor(page){
this.page = page
}

async click(locator){
    await locator.click()
}
async fill(locator,value){
    await locator.fill(value)
}
async clear(locator){
    await locator.clear()
}

async gettext(locator){
    return (await locator.textContent())??""
}

async hover(locator){
    await locator.hover()
}

async doubleClick(locator){
    await locator.dblClick()
}
async rightClick(locator){
    await locator.click({button:"right"})
}
async check(locator){
    await locator.check()
}
async uncheck(locator){
    await locator.uncheck()
}
async isVisible(locator){
 return    await locator.isVisible()
}
async isEnabled(locator){
    return await locator.isEnabled()
}
async selectByText(locator){
    await locator.selectOption({label:text})
}
async selectByValue(locator){
    await locator.selectOption(value)
}
async scrollIntoView(locator){
    await locator.scrollIntoViewIfNeeded()
}
async waitForHidden(locator){
    await locator.waitFor({state:"hidden"})
}
async waitForVisible(locator){
    await locator.waitFor({state:"visible"})
}
async verifyText(locator,expectedText){
    await expect(locator).toHaveText(expectedText)
}
async verifyTitle(locator,expectedTitle){
    await expect(locator).toHaveTitle(expectedTitle)
}
}
module.exports=BasePage