export const add = (string) => {
    if(!string) return 0

    const delimiter = '\n'
    const stringArry = string.split(delimiter).map(item => item.split(','))
    let numbersArray = stringArry.flat()

    const result = numbersArray.reduce((acc, num) => {
        acc = acc + parseInt(num)
        return acc
    }, 0)
    return result
};