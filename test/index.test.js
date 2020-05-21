const assert = require('chai').assert;
const calculate = require('../index');


describe('Fitness Health Calculations', () => {

    describe('bmr()', () => {

        it('Should get the basal metabolic rate, for male. METRIC UNITS (number of calories)', () => {
            assert.equal(calculate.bmr('male', 22, 195, 95), 2063.75)
        });

        it('Should get the basal metabolic rate, for female. METRIC UNITS (number of calories)', () => {
            assert.equal(calculate.bmr('female', 20, 172, 59), 1404)
        });

        it('Should get the basal metabolic rate, for male. IMPERIAL UNITS (number of calories)', () => {
            assert.equal(calculate.bmr('male', 22, 6.2, 195), 1960.45)
        });

        it('Should get the result as a NUMBER.', () => {
            assert.typeOf(calculate.bmr('male', 26, 180, 70, 'moderate'), 'number')
        });

    });

    describe('tdee()', () => {

        it('Should get the total daily energy expenditure, for male. METRIC UNITS (number of calories)', () => {
            assert.equal(calculate.tdee('male', 20, 185, 100, 'high'), 3555.66)
        });

        it('Should get the total daily energy expenditure, for male. IMPERIAL UNITS (number of calories)', () => {
            assert.equal(calculate.tdee('male', 20, 6.1, 202, 'high'), 3420.93)
        });

        it('Should get the result as a NUMBER.', () => {
            assert.typeOf(calculate.tdee('female', 20, 178, 85, 'extreme'), 'number')
        });
    });
    
    

    describe('caloricNeeds()', () => {

        it('Should get the total daily caloric needs, for male. METRIC UNITS (number of calories)', () => {
            assert.equal(calculate.caloricNeeds('male', 20, 185, 100, 'high', 'gain', 'agressive'), 3955.66)
        });
    
        it('Should get the total daily caloric needs, without optional approach parameter, for male. METRIC UNITS (number of calories)', () => {
            assert.equal(calculate.caloricNeeds('male', 20, 185, 100, 'high', 'gain'), 3755.66)
        });
    
        it('Should get the total daily caloric needs, without optional approach parameter, for female. METRIC UNITS (number of calories)', () => {
            assert.equal(calculate.caloricNeeds('female', 30, 170, 60, 'light', 'reduction'), 1658.31)
        });

        it('Should get the total daily caloric needs, without optional approach parameter, for female. IMPERIAL UNITS (number of calories)', () => {
            assert.equal(calculate.caloricNeeds('female', 30, 5.66, 125, 'light', 'reduction'), 1634.41)
        });

        it('Should get the result as a NUMBER.', () => {
            assert.typeOf(calculate.caloricNeeds('male', 26, 180, 70, 'light', 'reduction'), 'number')
        });

    });
    
});


