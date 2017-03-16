
(function() {
    'use strict';
    let expect = window.chai.expect;
    describe('math tests', function() {

        describe('sum function', function() {

            it('should be a function', function(){
                  expect(window.calc.sum).to.be.a('function');
            });

            it('should return a number when an argument is passed', function() {
                let result = window.calc.sum([1, 1, 1]);
                expect(result).to.be.a('number').and.to.equal(3);
            });

            it('should return a number when only one number is passed inside the array', function() {
                let result = window.calc.sum([1]);
                expect(result).to.be.a('number');
                expect(result).to.equal(1);
            });

            it('should return 0 when no number or an empty array is passed', function() {
                let result = window.calc.sum([]);
                expect(result).to.be.a('number');
                expect(result).to.equal(0);
            });

            it('should return 0 when something other than array is passed', function() {
                let result = window.calc.sum('3');
                expect(result).to.be.a('number');
                expect(result).to.equal(0);
            });


            it('should return a number when an array containing numbers as strings', function() {
                let result = window.calc.sum(['1', '1']);
                expect(result).to.be.a('number');
                expect(result).to.equal(2);
            });

            it('should return a number when an array containing mixed types are included', function() {
                let result = window.calc.sum(['1', 2]);
                expect(result).to.be.a('number');
                expect(result).to.equal(3);
            });

            it('should return a number when an array containing mixed types are included', function() {
                let result = window.calc.sum(['1', 'bill']);
                expect(result).to.be.a('number');
                expect(result).to.be.NaN;
            });


            it('should return NaN when an array of something other than numbers is passed', function() {
                let result = window.calc.sum(['green', true]);
                expect(result).to.be.NaN;
            });

        });



        describe('factorial test', function() {


            it('should be a function', function(){
                  expect(window.calc.factorial).to.be.a('function');
            });

            it('should return 1 when 1 is passed', function() {
                let result = window.calc.factorial(1);
                expect(result).to.be.a('number');
                expect(result).to.equal(1);
            });


            it('should return 0 when something other than a number is passed', function() {
                let result = window.calc.factorial(['number', 0]);
                expect(result).to.be.a('number');
                expect(result).to.equal(0);
            });

            it('should return 0 when nothing is passed', function() {
                let result = window.calc.factorial();
                expect(result).to.be.a('number');
                expect(result).to.equal(0);
            });

            it('should return a number when a number a as a string is passed', function() {
                let result = window.calc.factorial('3');
                expect(result).to.be.a('number');
                expect(result).to.equal(6);
            });

            it('should return the first number if more than one number is passed', function() {
                let result = window.calc.factorial(1, 2);
                expect(result).to.be.a('number');
                expect(result).to.equal(1);
            });


            it('should return NaN when NaN is passed to it', function() {
                let result = window.calc.factorial('foo');
                expect(result).to.be.NaN;
            });


        });
    });

})();
