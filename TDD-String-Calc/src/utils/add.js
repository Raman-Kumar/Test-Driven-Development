export const add = (string) => {
    if(!string) return 0

    let delimiter = '\n'
    let stringArray = string
    if(string.substring(0,2) == '//'){
        delimiter = stringArray.substring(2,3)
        stringArray = string.substring(4)
        if(stringArray.charAt(0) == 'n')
            stringArray = string.substring(5)
    }
    stringArray = stringArray.split(delimiter).map(item => item.split(','))
    let numbersArray = stringArray.flat()

    let negativeNums = []
    numbersArray.map(num => {
        if(num < 0)
            negativeNums.push(num)
    });
    if(negativeNums.length)
        throw new Error(`negative numbers not allowed: ${negativeNums.join(',')}`)

    const result = numbersArray.reduce((acc, num) => {
        acc = acc + parseInt(num)
        return acc
    }, 0)
    return result
};