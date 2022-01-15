// TODO 디스플레이 테스트
// -[x] 숫자 클릭하면 디스플레이에 나타나는지
// -[] 연산자를 클릭하면 디스플레이에 나타나는지
// -[] 네자리 이상의 숫자 입력하면 경고
// -[] 숫자를 입력하지않고 연산자 클릭하면 경고


describe("login", () => {
    beforeEach(() => {
        cy.visit("http://localhost:63342/calculator/index.html?_ijt=skdgt18vjvh9vvr3bd5d3joher&_ij_reload=RELOAD_ON_SAVE");
    });


    it("숫자버튼을 누르면 디스플레이 테스트", () => {
        cy.get("#total").then(input=>{

            cy.get(".digits").contains("1").click();

            cy.get("#total").should("have.text","1");
        });
    });


    it("")
});