/**
 * Takes a number and returns a string that represents that number with a "k" appended to the end if
 * the number is greater than or equal to 1000
 * @returns A parsed string.
 */
const parseThousands = value => {
    return value >= 1000
        ? `${Math.round(value / 100) / 10}k`
        : String(value)
}

module.exports = {
    parseThousands
}