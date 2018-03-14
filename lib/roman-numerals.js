const Numerals = {
    I: 'I',
    V: 'V'
}

const Conversions = [{
    arabic: 1,
    roman: Numerals.I
}];

function Generate(number) {
    var remaining = number;

    if (number === 5) {
        return Numerals.V + Generate(remaining - number)
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
