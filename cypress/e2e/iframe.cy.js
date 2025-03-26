describe('iframe', ()=> {
    beforeEach(()=> {
      cy.goHome()
      cy.doLogin()
      cy.goTo('/iframe', 'Iframe')  
    })

    it('Deve preencher o nome em uma página que tem iframe'), ()=> {
        cy.get('#fullname').type('Fernando Papito')
    }
})