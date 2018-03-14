import 'should';
import {
    Generate,
    Numerals
} from '../lib/roman-numerals';

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
    });

    describe('subtractive numerals', function() {
        xit('should generate IV', function() {
            Generate(4).should.equal(Numerals.I + Numerals.V)
        });
    })

    describe('additive numerals', function() {
        xit('should generate VI', function() {
            Generate(6).should.equal(Numerals.V + Numerals.I)
        });
    })
});
