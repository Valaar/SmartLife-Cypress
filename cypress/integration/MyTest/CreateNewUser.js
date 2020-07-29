describe('Sign up', function() {
    it('Sign up User 1', function() {
        cy.visit('https://smartlifepath-client-qa.herokuapp.com/web-site/home')
        cy.get('.mat-tab-label-content').contains('Sign Up').click()
        cy.get('input[id="mat-input-2"]').type('Us1')
        cy.get('input[id="mat-input-3"]').type('userr1@mail.com')
        cy.get('input[id="mat-input-4"]').type('KT100NE')
        cy.get('input[id="mat-input-5"]').type('Qwerty123')
        cy.get('.mat-button-wrapper').contains('Sign Up').click()
        cy.contains('Getting Started').should('be.visible')

    })

    it('Sign up User 2', function() {
        cy.visit('https://smartlifepath-client-qa.herokuapp.com/web-site/home')
        cy.get('.mat-tab-label-content').contains('Sign Up').click()
        cy.get('input[id="mat-input-2"]').type('Us2')
        cy.get('input[id="mat-input-3"]').type('user2@mail.com')
        cy.get('input[id="mat-input-4"]').type('KT100NE')
        cy.get('input[id="mat-input-5"]').type('Qwerty123')
        cy.get('.mat-button-wrapper').contains('Sign Up').click()
        cy.contains('Getting Started').should('be.visible')

    })
})
