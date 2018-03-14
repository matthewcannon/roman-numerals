import 'should';

describe('generating roman numerals', function() {
    before(function() {});

    const generate = function(number) {
        if (number === 1) {
            return 'I';
        }
        return 'II';
    }

    describe('basic decimal numerals', function() {
        it('should generate I', function() {
            generate(1).should.equal('I')
        });

        it('should generate II', function() {
            generate(2).should.equal('II')
        });
    });
});
