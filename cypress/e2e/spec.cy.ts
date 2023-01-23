describe('Navigation', () => {
  it('Gets, types and asserts', () => {
    cy.visit('http://localhost:3000/')

    cy.get('a[href*="posts/ssg-ssr"]').click()


    // The new url should include "/posts"
    cy.url().should('include', '/posts/ssg-ssr')


    cy.get('h1').contains('Static Generation')

    // // Should be on a new URL which
    // // includes '/commands/actions'
    // cy.url().should('include', '/commands/actions')

    // // Get an input, type into it and verify
    // // that the value has been updated
    // cy.get('.action-email')
    //   .type('fake@email.com')
    //   .should('have.value', 'fake@email.com')
  })
})