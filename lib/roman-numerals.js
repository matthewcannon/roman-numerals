const Numerals = {
    I: 'I',
    IV: 'IV',
    V: 'V',
    X: 'X',
    C: 'C'
}

const Conversions = [{
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
    var remaining = number;

    if (number === 5) {
        return Numerals.V + Generate(remaining - number)
    }

    if (number === 4) {
        return Numerals.IV + Generate(remaining - number)
    }

    var result = '';

    for (var n = 1; n <= number; ++n) {
        result += Numerals.I
    }

    return result;
}

export {
    Generate,
    Numerals
}
