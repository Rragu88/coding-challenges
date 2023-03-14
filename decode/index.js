const title = ":htraE no od ot ffutS";
const messages = [
            "maerc eci yrT",
            "rewoT leffiE tisiV",
            "noom eht ot snamuh etacoleR",
            "egrahc ni stac tuP", 
        ]

function reverseString(str) {
    // return str.split('').reverse().join('');
    let newStr = '';
    
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }

    return newStr;
}

function reverseStringsInArray(arr) {
    return arr.map(item => reverseString(item));
}

reverseString(messages[0]);
reverseStringsInArray(messages);