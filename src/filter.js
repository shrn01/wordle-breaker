import { wordList } from "./db"

export function filterWords (dict) {
    let correct = dict["correct"]
    let outOfPlace = dict["outOfPlace"]
    let wrong = dict["wrong"]
    // console.log(dict)
    let regexStr = '^'
    
    let match = '.' 
    if (wrong && wrong !== '') {
        match = '[^' + wrong + ']'
    } else {
        match = '.'
    }

    // console.log(match)

    if (outOfPlace && outOfPlace[0] !== '') {    
        for (let i = 0; i < outOfPlace.length; i++) {
            regexStr += '(?=.*' + outOfPlace[i] + ')'
        }
    }

    for (let i = 0; i < 5; i++) {
        if (correct && i in correct && correct[i] !== '') {
            regexStr += correct[i]
        } else {
            regexStr += match
        }
    }
    regexStr += '$'

    let regex = new RegExp(regexStr, 'i')
    // console.log(regex)

    return wordList.filter((word) => word.match(regex))
}
