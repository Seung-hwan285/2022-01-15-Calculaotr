# 2022-01-15-Calculator

## 개요
자바스크립트 연습을 하기 위해서 소스를 찾아보다 우테코 커리큘림이 잘나와있어서 복기를 해본 프로젝트입니다.

### BDD Assertions
https://docs.cypress.io/guides/references/assertions#Chai

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


## 2. Cypress alert 연산자 다음 숫자 테스트
연산자 다음 숫자를 입력하면 3자리 제한이 걸려서 예외가 발생하는 상황이 생겼습니다.
여기서 생각해본 것은 연산자를 제거하고 그값을 inputValue에 넣어서 빈값으로 만드는 것이였습니다.



### 해결방안
inputValue에 해당하는 연산자를 가져오고 연산자를 제거한후 빈값으로만들고 값을 추가하는 방식입니다.
```javascript
 const oper = inputValue.split('').find(v=>OPEARLIST.includes(v));


    if(oper){
        // inputValue.split(oper)[0] 하면 앞에 숫자가 제거거[1]하면 연산자제거 하고 안에 숫자추가
        inputValue=inputValue.split(oper)[1];
        console.log(inputValue);

    }
```

## 3. Cypress =버튼누르면 연산은되지만 끝에  =나오는 현상
계속 =버튼을 누르면 계산은 되지만 =가 옆에붙어서 값이 나오는 현상이 생겼습니다.

### 해결방안
좀더 생각을 해보니 total.innerText에 '='가 나오면 return 을 해서 나오지않게 return을 시켜주면 되는 문제였습니다.
```javascript
    if(e.target.innerText ==='='){
        return;
    }

```
