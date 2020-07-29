describe('Friendship request and message sending', function() {
	it('User 1 sends a friend request', function() {
	cy.visit('https://smartlifepath-client-qa.herokuapp.com/web-site/home')
    	cy.get('input[placeholder="Email"]').type('userr1@mail.com')
    	cy.get('input[placeholder="Password"]').type('Qwerty123')
    	cy.get('.mat-button-wrapper').contains('Login').should('be.visible').click()

    	cy.get('.action > :nth-child(1) > .mat-button-wrapper > :nth-child(2)').click()
    	cy.get('.mat-menu-content > :nth-child(6)').click()
    	cy.get('#mat-input-6').type('user2@mail.com')
    	cy.get('.mat-form-field-suffix > .mat-button > .mat-button-wrapper').click()
    	cy.wait(3000)
    	cy.get('.send').click()

	})

    it('User 2 accepts a friend request and sends a message', function() {
    cy.visit('https://smartlifepath-client-qa.herokuapp.com/web-site/home')
            cy.get('input[placeholder="Email"]').type('user2@mail.com')
            cy.get('input[placeholder="Password"]').type('Qwerty123')
            cy.get('.mat-button-wrapper').contains('Login').should('be.visible').click()

            //Accept request

            cy.get(':nth-child(12) > .mat-button-wrapper > .mat-icon').click()
            cy.get('.request > .user-item > .name > :nth-child(2)').click()
            cy.wait(2000)
            cy.get(':nth-child(12) > .mat-button-wrapper > .mat-icon').click()
            cy.wait(1000)
            cy.reload()

          //Message
                cy.wait(3000)
                cy.get(':nth-child(12) > .mat-button-wrapper > .mat-icon').click()
                cy.get('.direct-message').click()
                cy.get('.ng-untouched').type('Test message')
                cy.get('[footer=""] > .mat-raised-button').click()

    })

           //Check message User 1

    	it('User 1 checks an incoming message', function() {

    	cy.visit('https://smartlifepath-client-qa.herokuapp.com/web-site/home');
        	cy.get('input[placeholder="Email"]').type('userr1@mail.com');
        	cy.get('input[placeholder="Password"]').type('Qwerty123');
        	cy.get('.mat-button-wrapper').contains('Login').should('be.visible').click();

        	cy.get(':nth-child(15) > .mat-icon-button > .mat-button-wrapper > .mat-icon').click();
            cy.contains('Test message').should('be.visible')


        	})
     })


     