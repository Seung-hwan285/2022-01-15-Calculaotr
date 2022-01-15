# 2022-01-15-Calculaotr

## 어려운점

### 1. Cypress alert 테스트
이상이 없는 코드인데 계속 테스트가 안되는 현상이 발생


**Cypress alert 테스트 예제**
https://stackoverflow.com/questions/51795306/how-can-we-test-the-alert-and-the-text-it-is-displaying-using-cypress-io-js-auto

```javascript

 it('네자리 이상의 숫자가 입력됐을 경우 경고메세지가 뜬다.', () => {

        const stub = cy.stub();
        cy.on('window:alert', stub);


        cy.get('.digits').contains('1').click();
        cy.get('#total').should('have.text', '1');

        cy.get('.digits').contains('2').click();
        cy.get('#total').should('have.text', '12');

        cy.get('.digits').contains('3').click();
        cy.get('#total').should('have.text', '123');


        cy.get('.digits')
            .contains('1')
            .click()
            .then(()=>{
               expect(stub.getCall(0)).to.be.calledWith('3자리 이하만 입력');
            });
        cy.get('#total').should('have.text','123');
    });
```

### 해결방안
cal.js 오타로인한 테스트 오류

```javscript

   else{
        return alert("3자리 이하 입력");
    }

```

