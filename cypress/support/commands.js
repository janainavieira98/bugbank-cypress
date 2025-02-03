Cypress.Commands.add('cadastrarSemSaldo', () => {
    cy.visit('');
  
    cy.get('.ihdmxA').click()
    
    cy.get(':nth-child(2) > .input__default').type('example@example.com', { force: true })
    cy.get(':nth-child(3) > .input__default').type('Teste', { force: true })
    cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('Teste', { force: true })
    cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('Teste', { force: true })

    cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click( { force: true })
    
    cy.get('#btnCloseModal').click()

        
    cy.get('input[name="email"]').first().type('example@example.com', { force: true });
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('Teste', { force: true })
    cy.contains('button', 'Acessar').click({ force: true });
})  

Cypress.Commands.add('cadastrarComSaldo', () => {
    cy.visit('');
  
    cy.get('.ihdmxA').click()
    
    cy.get(':nth-child(2) > .input__default').type('example@example.com', { force: true })
    cy.get(':nth-child(3) > .input__default').type('Teste', { force: true })
    cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('Teste', { force: true })
    cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('Teste', { force: true })
    cy.get('#toggleAddBalance').click({force: true})
    cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click( { force: true })
    
    cy.get('#btnCloseModal').click()

        
    cy.get('input[name="email"]').first().type('example@example.com', { force: true });
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('Teste', { force: true })
    cy.contains('button', 'Acessar').click({ force: true });
})  

      

