//
// Write tests for the two functions in the window.calc namespace...
// The description of the functions are in the source code, read them!
// Ensure that you are testing not just the success conditions,
// but also the failures! For example, ensure that a function acts as
// expected both with good arguments and bad arguments!
//
//


(function() {
    'use strict';
    let expect = window.chai.expect;
      describe('math tests', function(){

        describe ('sum function', function(){

          it('should return a number when an argument is passed', function(){
            let result = window.calc.sum([1, 1]);

            expect(result).to.be.a('number');
            expect(result).to.equal(2);


            });

            it('should return a number when only one number is passed', function(){
              let result = window.calc.sum([1]);

              expect(result).to.be.a('number');
              expect(result).to.equal(1);


              });

            it('should return 0 when no number or an empty array is passed', function(){
              let result = window.calc.sum([]);

              expect(result).to.be.a('number');
              expect(result).to.equal(0);


              });

              it('should return 0 something other than array is passes', function(){
                let result = window.calc.sum('3');

                expect(result).to.be.a('number');
                expect(result).to.equal(0);


                });


            it('should return NaN when an array of something other than numbers is passed', function(){
              let result = window.calc.sum(['green', true]);
              expect(result).to.be.NaN;
            });



          });


      });

})();



//assertions
//
//check for  sum function
//if 2 numbers are passed-check!!!
//if only 1 num is passed - check!!!
//if no numbers or and empty array is passed - check!!!
//something other than array is passed--check!!!
//if something other than a number is passed inside and array-check!!!
//
//
//
