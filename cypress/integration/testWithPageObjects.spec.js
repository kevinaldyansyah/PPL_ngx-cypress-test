import { navigateTo } from "../support/page_objects/navigationPage"
import { onFormLayoutsPage } from "../support/page_objects/formLayoutsPage"
import { onDatePickerPage } from "../support/page_objects/datePickerPage"
import { onSmartTablePage } from "../support/page_objects/smartTablePage"

const runOn = (browser, fn) => {
    if (Cypress.isBrowser(browser)) {
        fn()
    }
}

const ignoreOn = (browser, fn) => {
    if (!Cypress.isBrowser(browser)){
        fn()
    }
}

describe('Test with Page Objects', () => {

    beforeEach('open applications', () => {
        cy.openHomePage()
    })

    ignoreOn('firefox', () => {
        it('verify navigation across the pages', () => {
            navigateTo.formLayoutsPage()
            navigateTo.datpickerPage()
            navigateTo.smartTablePage()
            navigateTo.toolTipPage()
            navigateTo.toasterPage()
        })
    })
    
    it('should submit Inline and Basic form and select tomorrow date in the calendar', () => {
        navigateTo.formLayoutsPage()
        onFormLayoutsPage.submitInLineFormWithNameAndEmail('Artem', 'test@test.com')
        onFormLayoutsPage.submitBasicFormWithEmailAndPassword('test@test.com', 'password')
        navigateTo.datpickerPage()
        onDatePickerPage.selectCommonDatepickerDateFromToday(1)
        onDatePickerPage.selectDatepickerWithRangeFromToday(7, 14)
        navigateTo.smartTablePage()
        onSmartTablePage.addNewRecordWithFirstAndLastName('Artem', 'Bondar')
        onSmartTablePage.updateAgeByFirstName('Artem', '35')
        onSmartTablePage.deleteRowByIndex(1)

    })
    
})
