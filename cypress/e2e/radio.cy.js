describe('Rdio Buttons', ()=> {

    beforeEach(()=> {
        cy.goHome()
        cy.doLogin()
        cy.goTo('/radio', 'Radio Buttons')
    })

    it('Deve marcar o framework', ()=> {
        cy.contains('label', 'Cypress')
            .click()
    })

})