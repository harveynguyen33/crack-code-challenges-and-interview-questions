import { benchMark, IBenchMarkResult } from "../util"

/**
 * Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures
 * @param {string} str
 * @returns {boolean} 
 */
enum APPROACH {
    BRUTE_FORCE = 'BRUTE_FORCE'
}

interface IResult {
    [key: string]: IBenchMarkResult[]
}
const strA = 'testduplicate'
const strB = 'noduplicate'
const result: IResult = {}


// Approach 1: Brute Force
const isUniqueBF = (str: string) => (): boolean => {
    const length = str.length
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            if (str[i] === str[j]) return false
        }
    }
    return true
}

const runBFA = () => {
console.log('-----------------Start Brute Force-------------------\n')
result[APPROACH.BRUTE_FORCE] = [benchMark(isUniqueBF(strA), 'isUniqueBF strA'), benchMark(isUniqueBF(strB), 'isUniqueBF strB')]
console.log('\n-----------------End Brute Force---------------------')
}

runBFA()