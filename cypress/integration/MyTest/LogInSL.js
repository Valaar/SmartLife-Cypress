describe('Login', function() {
	it('Sign in', function() {
	cy.visit('https://smartlifepath-client-qa.herokuapp.com/web-site/home')
	cy.get('input[placeholder="Email"]').type('polezniybess@gmail.com')
	cy.get('input[placeholder="Password"]').type('Qwerty123')
	cy.get('.mat-button-wrapper').contains('Login').should('be.visible').click()
		cy.contains('Getting Started').should('be.visible')
	})
})