import chai from 'chai';
import Calculator from './infCalculator';

const should = chai.should();

describe('INF Calculator', () => {
    describe('exists', () => {
        it('and can be instantiated', () => {
            let calculator = Calculator();
            should.exist(calculator);
            should.exist(calculator);
            calculator.should.be.an('object');
        });
    });
    describe('calculateCost', () => {
        it('returns 100 when passed 100, 0, 0', () => {

            //assert
            Calculator().calculateCost(100,0,0).should.equal(100);
        });
        it('returns 80 when passed 100, 0.2, 0', () => {

            //assert
            Calculator().calculateCost(100,0.2,0).should.equal(80);
        });
        it('returns 100 when passed 123, 0, 0.23', () => {

            //assert
            Calculator().calculateCost(123,0,0.23).should.equal(100);
        });
        it('returns 100 when passed 123, 0.2, 0.23', () => {

            //assert
            Calculator().calculateCost(123,0.2,0.23).should.equal(80);
        });
    });
});
