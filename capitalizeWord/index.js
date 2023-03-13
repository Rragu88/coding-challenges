function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1);
}

function toTitleCase(str) {
    const sentenceArr = str.split(' ');
    const capArr = sentenceArr.map(word => capitalizeWord(word));
    return capArr.join(' ');
}