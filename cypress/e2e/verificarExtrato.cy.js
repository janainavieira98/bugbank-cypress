describe('Verificar extrato', () => {
    beforeEach(() => {
        cy.cadastrarComSaldo()
    })
    
    it('Verificar se o saldo no extrato está correto', () => {
        cy.get('#textBalance > span').then(($saldo1) => {
            const saldoTelaInicial = $saldo1.text();
            cy.get('#btn-EXTRATO').click({ force: true })

            cy.get('#textBalance > span').then(($saldo2) => {
                const saldoExtrato = $saldo2.text(); 
                expect(saldoTelaInicial).to.eq(saldoExtrato)
            })
        })
    })
})