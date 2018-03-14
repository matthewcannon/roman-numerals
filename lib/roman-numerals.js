import R from 'ramda';

const Numerals = {
    I: 'I',
    V: 'V',
    X: 'X',
    C: 'C',
    L: 'L',
    D: 'D',
    M: 'M'
}

const Conversions = [{
        arabic: 1000,
        roman: Numerals.M
    },
    {
        arabic: 900,
        roman: Numerals.C + Numerals.M
    },
    {
        arabic: 500,
        roman: Numerals.D
    },
    {
        arabic: 400,
        roman: Numerals.C + Numerals.D
    },
    {
        arabic: 100,
        roman: Numerals.C
    },
    {
        arabic: 90,
        roman: Numerals.X + Numerals.C
    },
    {
        arabic: 50,
        roman: Numerals.L
    },
    {
        arabic: 40,
        roman: Numerals.X + Numerals.L
    },
    {
        arabic: 10,
        roman: Numerals.X
    },
    {
        arabic: 9,
        roman: Numerals.I + Numerals.X
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
