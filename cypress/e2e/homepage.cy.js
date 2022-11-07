describe('Home page test', () => {
    it('Load homepage', ()=>{
      cy.visit('http://localhost:8081')
      cy.get('.list>li').should('have.length', 18)
    })
    it('Filter pokemon list', () => {
        cy.get('.search-bar').type('mewtwo')
        cy.get('.list>li').should('have.length', 3)
    })
    it('Go to Details', () => {
        cy.get('.list>li').first().click()
        cy.location().should((loc) => {
            expect(loc.hash).to.eq('#/details/mewtwo')
          })
    })
  })