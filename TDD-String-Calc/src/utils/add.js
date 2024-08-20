export const add = (string) => {
    if(!string) return 0
    const numbersArray = string.split(',')

    const result = numbersArray.reduce((acc, num) => {
        acc = acc + parseInt(num)
        return acc
    }, 0)
    return result
};