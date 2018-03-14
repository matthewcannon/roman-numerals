import 'should';
import {
    Generate,
    Numerals
} from '../lib/roman-numerals';
import R from 'ramda';

describe('generating roman numerals', function() {
    before(function() {});

    describe('basic numerals', function() {
        it('should generate I', function() {
            Generate(1).should.equal(Numerals.I)
        });

        it('should generate II', function() {
            Generate(2).should.equal(Numerals.I + Numerals.I)
        });

        it('should generate III', function() {
            Generate(3).should.equal(Numerals.I + Numerals.I + Numerals.I)
        });

        it('should generate V', function() {
            Generate(5).should.equal(Numerals.V)
        });

        it('should generate X', function() {
            Generate(10).should.equal(Numerals.X)
        });

        it('should generate C', function() {
            Generate(100).should.equal(Numerals.C)
        });

        it('should generate XL', function() {
            Generate(40).should.equal(Numerals.X + Numerals.L)
        });

        it('should generate L', function() {
            Generate(50).should.equal(Numerals.L)
        });

        it('should generate XC', function() {
            Generate(90).should.equal(Numerals.X + Numerals.C)
        });

        it('should generate D', function() {
            Generate(500).should.equal(Numerals.D)
        });
    });

    describe('subtractive numerals', function() {
        it('should generate IV', function() {
            Generate(4).should.equal(Numerals.I + Numerals.V)
        });

        it('should generate IX', function() {
            Generate(9).should.equal(Numerals.I + Numerals.X)
        });
    })

    describe('additive numerals', function() {
        it('should generate VI', function() {
            Generate(6).should.equal(Numerals.V + Numerals.I)
        });
    })

    describe('complex numerals', function() {
        it('should generate MCMLXXXIV', function() {
            Generate(1984).should.equal('MCMLXXXIV')
        });
    });
});
