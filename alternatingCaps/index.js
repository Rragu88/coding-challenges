function altCaps(str) {
    let newStr = '';
    for (let i=0; i < str.length; i++) {
        if(i % 2 === 0) {
            newStr += str[i].toUpperCase();
        } else {
            newStr += str[i];
        }
    }
    return newStr;
}

altCaps("WhEn yOu vIsIt POrTlAnD YoU HaVe tO Go tO VoODOo DOnUtS");