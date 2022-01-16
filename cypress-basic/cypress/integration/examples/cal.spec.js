// TODO 디스플레이 테스트
// -[x] 숫자 클릭하면 디스플레이에 나타나는지
// -[x] 연산자를 클릭하면 디스플레이에 나타나는지
// -[x] 네자리 이상의 숫자 입력하면 경고
// -[x] 숫자를 입력하지않고 연산자 클릭하면 경고
// -[] delet 버튼 누르면 삭제


describe('login', () => {
    beforeEach(() => {
        cy.visit("http://localhost:63342/calculator/index.html?_ijt=skdgt18vjvh9vvr3bd5d3joher&_ij_reload=RELOAD_ON_SAVE");
    });


    it('숫자버튼을 누르면 디스플레이 테스트', () => {
        cy.get("#total").then(input=>{

            cy.get('.digits').contains('1').click();
            cy.get('#total').should('have.text','1');
        });
    });

    it('연산자 누르면 디스플레이 숫자 동시에 테스트',()=>{
       cy.get("#total").then(input=>{

            cy.get('.digits').contains('1').click();
            cy.get('.operation').contains('/').click();
            cy.get('#total').should('have.text','1'+'/');
       });
    });



    it('네자리 이상의 숫자가 입력됐을 경우 경고메세지 테스트.', () => {

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


    it('네자리 이상의 숫자가 입력후 연산자 테스트',()=>{
       const stub = cy.stub();

       cy.on('window:alert',stub);


       for(let i=0; i<3; i++){
           cy.get('.digits').contains('1').click();
       }

       cy.get('.digits')
           .contains('1')
           .click()
           .then(()=>{
              expect(stub.getCall(0)).to.be.calledWith('3자리 이하만 입력');
           });

       cy.get('.operation').contains('X').click();


        for(let i=0; i<3; i++){
            cy.get('.digits').contains('1').click();
        }

        cy.get('#total').should('have.text','111X111');
    });


    it('숫자를 입력하지않고 연산자 입력하면 경고메세지 테스트',()=>{
        const stub = cy.stub();
        cy.on('window:alert',stub);
        cy.get(".operation").contains("/")
            .click()
            .then(()=>{
               expect(stub.getCall(0)).to.be.calledWith('숫자먼저 입력해주세요');
            });
    });

    it('삭제 버튼을 누르면 숫자나 연산자 1개가 삭제되는지 테스트',()=>{
        cy.get('.digits').contains('1').click();

        cy.get('.operation').contains('/').click();
        cy.get('.delete').click();
        cy.get('.delete').click();
        cy.get('.digits').contains('2').click();

       cy.get('#total').should('have.text','2');

    });


});