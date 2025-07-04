function performCalculation(num1, num2, operationIndex, expected) {
  cy.get('#number1Field').clear().type(num1);
  cy.get('#number2Field').clear().type(num2);
  cy.get('#selectOperationDropdown').select(operationIndex.toString());
  cy.get('#calculateButton').click();
  cy.get('#numberAnswerField').should('have.value', expected);
}

describe('Build 8 testai', () => {

beforeEach(() => {

    cy.viewport(1000, 1400)
    cy.visit('https://testsheepnz.github.io/BasicCalculator.html');
    cy.get("#selectBuild").select('9');
    cy.get('#selectBuild').should('have.value', '9');
    cy.get("#clearButton").should('not.be.disabled');

});

    it('pridėti', () => {
    
    performCalculation ('5','5', 0, '10');  // paprasta sudėtis
    performCalculation ('-5','-5', 0, '-10'); // sudėtis su minusu
    performCalculation ('0','0', 0, '0'); // nulių sudėtis

    cy.get('#number1Field').clear().type("a");
    cy.get('#number2Field').clear().type("2");
    cy.get('#selectOperationDropdown').select("0");
    cy.get('#calculateButton').click();

    cy.get('#errorMsgField').should('include.text', 'Number 1 is not a number'); // negalimas veiksmas

})
    
    it('atimti', () => {
    
    performCalculation ('5','3', 1, '2');  // paprasta atimtis
    performCalculation ('-5','-5', 1, '0'); // atimtis su minusu
    performCalculation ('5.5','3', 1, '2.5'); // atimtis su kableliu

    cy.get('#number1Field').clear().type("a");
    cy.get('#number2Field').clear().type("5");
    cy.get('#selectOperationDropdown').select("1");
    cy.get('#calculateButton').click();

    cy.get('#errorMsgField').should('include.text', 'Number 1 is not a number'); // negalimas veiksmas


})

    it('padauginti', () => {
    
    performCalculation ('7','7', 2, '49');  // paprasta daugyba
    performCalculation ('-5','-5', 2, '25'); // daugyba su minusu
    performCalculation ('2.5','2.5', 2, '6.25'); // daugyba su kableliu

    cy.get('#number1Field').clear().type("a");
    cy.get('#number2Field').clear().type("5");
    cy.get('#selectOperationDropdown').select("2");
    cy.get('#calculateButton').click();

    cy.get('#errorMsgField').should('include.text', 'Number 1 is not a number'); // negalimas veiksmas

})

    it('padalinti', () => {
    
    performCalculation ('7','2', 3, '3.5');  // paprasta dalyba
    performCalculation ('-5','-5', 3, '1'); // dalyba su minusu
    performCalculation ('6.5','2.5', 3, '2.6'); // dalyba su kableliu

    cy.get('#number1Field').clear().type("a");
    cy.get('#number2Field').clear().type("5");
    cy.get('#selectOperationDropdown').select("3");
    cy.get('#calculateButton').click();

    cy.get('#errorMsgField').should('include.text', 'Number 1 is not a number'); // negalimas veiksmas

    cy.get('#number1Field').clear().type("0");
    cy.get('#number2Field').clear().type("0");
    cy.get('#selectOperationDropdown').select("3");
    cy.get('#calculateButton').click();

    cy.get('#errorMsgField').should('include.text', 'Divide by zero error!'); // negalimas veiksmas


})

    it('sujungti', () => {
    
    performCalculation ('3','9', 4, '39');  // paprastas sujungimas
    performCalculation ('-5','-5', 4, '-5-5'); // sujungimas su minusais
    performCalculation ('6.5','2.5', 4, '6.52.5'); // sujungimas su kableliu
    performCalculation ('a','-10', 4, 'a-10'); // sujungimas su raide

    cy.get("#intSelectionLabel").should('not.be.visible');

})

});



///// Rastos klaidos - dingsta elementai, negalima paspausti