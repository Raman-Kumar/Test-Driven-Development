export const add = (string) => {
    if(!string) return 0

    let delimiter = '\n'
    let stringArry = string
    if(string.substring(0,2) == '//'){
        delimiter = string.substring(2,3)
        stringArry = stringArry.split('\n')[1]
    }
    stringArry = stringArry.split(delimiter).map(item => item.split(','))
    let numbersArray = stringArry.flat()

    const result = numbersArray.reduce((acc, num) => {
        acc = acc + parseInt(num)
        return acc
    }, 0)
    return result
};