'use strict';

const match = require('../../MultiBracketValidation/multi-bracket-validation');
const trueArr =['{}','{}(){}','()[[Extra Characters]]','(){}[[]]','{}{Code}[Fellows](())'];
const falseArr =['[({}]','(](','{(})'];



describe('it should check for even amount of scoping characters', ()=>{
    it('Should check for matching symbols',() =>{
        
        let test = trueArr[0];
        expect(match.matchingBrackets(test)).toBe(true);

        test = trueArr[1];
        expect(match.matchingBrackets(test)).toBe(true);

        test = trueArr[2];
        expect(match.matchingBrackets(test)).toBe(false);

        // test = trueArr[3];
        // expect(match.matchingBrackets(test)).toBe(true);
    })
})