const Numerals = {
    I: 'I'
}

function Generate(number) {
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
