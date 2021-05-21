describe('Pizza App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

    const nameInput = () => cy.get('input[id=name-input]')
    const orderBtn = () => cy.get('button[id=order-button]')




    describe('Filling out the inputs and submitting', () => {

        it('can type in the inputs', () => {
            nameInput()
                .should('have.value', '')
                .type('Jaden')
                .should('have.value', 'Jaden')
        })

        it('the submit button enables', () => {
            nameInput().type('jaden')
            orderBtn().should('not.be.disabled')
        })

   

    // describe('Adding a new quote', () => {
    //     it('can submit and delete a new quote', () => {
    //         textInput().type('Have fun!')
    //         authorInput().type('Chris')
    //         submitBtn().click()

    //         // cy.contains('Have fun!').siblings('button:nth-of-type(2)').click()
    //         cy.contains('Have fun!').next().next().click()
    //         cy.contains('Have fun!').should('not.exist')

    //     })
    })
})