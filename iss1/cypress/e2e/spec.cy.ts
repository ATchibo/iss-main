describe('add destination to private list', () => {
  it('start', () => {
    cy.visit('http://localhost:3000/login')
    cy.get('#username').type('user2')
    cy.get('#password').type('12345678')
    cy.get('button[type="submit"]').click()
    cy.url().should('eq', 'http://localhost:3000/');

    cy.get('#public-list-btn').click()

    var title = ""
    cy.get('#card-title-1').invoke('text').then((text) => {
      title = text.trim()
    })
    cy.get('#card-btn-1').click()

    cy.get('#startDate').type('2021-05-01')
    cy.get('#endDate').type('2021-05-10')

    cy.get('#add-btn').click()

    cy.get('#card-title-4').invoke('text').then((text) => {
      expect(text.trim()).to.eq(title)
    })
  })
})