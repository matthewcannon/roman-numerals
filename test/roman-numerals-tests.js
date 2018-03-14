import 'should';
import {
    Generate,
    Numerals
} from '../lib/roman-numerals';

describe('generating roman numerals', function() {
    before(function() {});

    describe('basic decimal numerals', function() {
        it('should generate I', function() {
            Generate(1).should.equal(Numerals.I)
        });

        it('should generate II', function() {
            Generate(2).should.equal(Numerals.I + Numerals.I)
        });

        it('should generate III', function() {
            Generate(3).should.equal(Numerals.I + Numerals.I + Numerals.I)
        });
    });
});
