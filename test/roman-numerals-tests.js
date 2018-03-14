import 'should';

describe('generating roman numerals', function() {
    before(function() {});

    const generate = function(number) {
        return 'I';
    }

    describe('simple numerals', function() {
        it('should generate I', function() {
            generate(1).should.equal('I')
        });

        it('should generate II', function() {
            generate(2).should.equal('II')
        });
    });
});
