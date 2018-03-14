import R from 'ramda';

const Numerals = {
    I: 'I',
    IV: 'IV',
    V: 'V',
    X: 'X',
    C: 'C'
}

const Conversions = [{
        arabic: 100,
        roman: Numerals.C
    },
    {
        arabic: 10,
        roman: Numerals.X
    },
    {
        arabic: 5,
        roman: Numerals.V
    },
    {
        arabic: 4,
        roman: Numerals.I + Numerals.V
    },
    {
        arabic: 1,
        roman: Numerals.I
    }
];

function Generate(number) {
    var match = R.find(R.propSatisfies(arabic => arabic <= number, 'arabic'))(Conversions);

    if (match !== undefined) {
        return match.roman + Generate(number - match.arabic)
    }

    return '';
}

export {
    Generate,
    Numerals
}
