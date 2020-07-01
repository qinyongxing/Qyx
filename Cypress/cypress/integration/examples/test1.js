/**
 * FileName: test1
 * Author:   秦永星
 * Date:     2020/6/28 0028 下午 6:57
 * Description:
 */


// console.log(fn1());
// context('Assertions', function(){
//     beforeEach(function()  {
//         cy.log("每次执行先执行这个")
//     });
//     describe('第一个测试用例', function(){
//         it('第一个测试用例01', function() {
//             // cy.log('打印第一个测试用例');
//             // cy.wait(3000);
//             // return 12321
//         });
//     });
//     describe('第二个测试用例', function() {
//         it('第二个测试用例02', function()  {
//             // cy.log('打印第二个测试用例');
//         });
//     });
// });
// context('Assertions', () => {
//     beforeEach(() => {
//         // cy.log("每次执行先执行这个")
//     });
//     describe('第一个测试用例', () => {
//         it('第一个测试用例01', () => {
//             // cy.log('打印第一个测试用例');
//             cy.wait(3000);
//         });
//     });
//     describe('第二个测试用例', () => {
//         it('第二个测试用例02', () => {
//             cy.log('打印第二个测试用例').as('test1');
//             // cy.log(this.test1);
//
//         });
//     });
// });
describe('parent', () => {
    context('child', () => {
        beforeEach(() => {
            cy.visit('http://localhost:7077/login')
            cy.wrap('code1').then(($code1)=>{
                var code1='code1';
                return code1;
            }).as('a').then(($code1)=>{
                var code2='code1'.substr(1,2);
                var code3=[$code1,code2]
                return code3;
            }).as('b');
        });
        describe('grandchild', () => {
            // beforeEach(() => {
            //     cy.wrap('3').as('c');
            // });

            it('can access all aliases as properties', function () {
                cy.get('body > :nth-child(3) > :nth-child(1)')
                    .as('a')
                    .then(($input1)=>{
                    var code=$input1.text()
                    cy.log(code)
                        return code
                }
                )
                cy.get('@a')
                    .then((x)=>{
                    var code2=x.text()
                    cy.log(code2)

                })
                cy.log('打印code1',this.a);
                cy.log('打印裁剪后的code1',this.b);

            });
        });
    });
});