describe('Realizar transferencia com saldo em conta', () => {

    it('Realizar transferência para conta inexistente', () => {
        cy.cadastrarComSaldo()
        cy.get('#btn-TRANSFERÊNCIA').click({ force: true})
        cy.get(':nth-child(1) > .input__default').type('353', { force: true})
        cy.get('.account__data > :nth-child(2) > .input__default').type('2', { force: true})
        cy.get('.styles__ContainerFormTransfer-sc-1oow0wh-0 > :nth-child(2) > .input__default').type('200.00', { force: true})
        cy.get(':nth-child(3) > .input__default').type('Transferencia para Joana', { force: true} )
        cy.get('.style__ContainerButton-sc-1wsixal-0').click({ force: true})
        cy.contains('#modalText', 'Conta inválida ou inexistente').should('be.visible')
    
    })

    it('Realizar transferência com saldo zerado', () => { 
        cy.cadastrarSemSaldo()
       
        cy.get('#btn-TRANSFERÊNCIA').click({ force: true})
        cy.get(':nth-child(1) > .input__default').type('123', { force: true})
        cy.get('.account__data > :nth-child(2) > .input__default').type('9', { force: true})
        cy.get('.styles__ContainerFormTransfer-sc-1oow0wh-0 > :nth-child(2) > .input__default').type('0.00', { force: true})
        cy.get(':nth-child(3) > .input__default').type('Transferencia para Joana', { force: true} )
        cy.get('.style__ContainerButton-sc-1wsixal-0').click({ force: true})
        cy.contains('#modalText', 'Valor da transferência não pode ser 0 ou negativo').should('be.visible')
    
    })

    it('Realizar transferência para mesma conta', () => { 
        cy.cadastrarComSaldo()
        cy.get('#textAccountNumber > span').invoke('text').then((texto) => {
            // Dividindo o texto pelo traço
            const partes = texto.split('-');
      
            // Captura o valor antes e depois do traço
            const antesDoTraco = partes[0];
            const depoisDoTraco = partes[1];
      
            // Exibe no console
            cy.log("Antes do traço: " + antesDoTraco);
            cy.log("Depois do traço: " + depoisDoTraco);
      
    
            cy.get('#btn-TRANSFERÊNCIA').click({ force: true})
            cy.get(':nth-child(1) > .input__default').type(antesDoTraco, { force: true})
            cy.get('.account__data > :nth-child(2) > .input__default').type(depoisDoTraco, { force: true})
            cy.get('.styles__ContainerFormTransfer-sc-1oow0wh-0 > :nth-child(2) > .input__default').type('150.00', { force: true})
            cy.get(':nth-child(3) > .input__default').type('Transferencia para Joana', { force: true} )
            cy.get('.style__ContainerButton-sc-1wsixal-0').click({ force: true})
            cy.contains('#modalText', 'Nao pode transferir pra mesmo conta').should('be.visible')
    
        })
    });
    it('Tentar realizar transferência sem preencher os campos', () => { 
        cy.cadastrarComSaldo()
        cy.get('#btn-TRANSFERÊNCIA').click({ force: true})
        cy.get('.style__ContainerButton-sc-1wsixal-0').click({ force: true})
        cy.wait(4000)
        cy.contains('.kOeYBn > .input__warging', 'transferValue must be a `number` type, but the final value was: `NaN` (cast from the value `""`).').should('be.visible')
    
    })
})

