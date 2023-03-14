const emojis = {
    "smile": "😊",
    "angry": "😠",
    "party": "🎉",
    "heart": "💜",
    "cat":   "🐱",
    "dog":   "🐕"
}

function emojifyWord(word){
    word.toLowerCase();
    if (word.startsWith(':') && word.endsWith(':')) {
        const slice = word.slice(1, -1);
        if (emojis[slice]) {
           return emojis[slice];
        } else {
            return slice;
        }
    } else {
        return word;
    }
}

function emojifyPhrase(phrase) {
    const phraseArr = phrase.split(' ');
    const newPhrase = phraseArr.map(word => emojifyWord(word)).join(' ');
    console.log(newPhrase);
}

emojifyPhrase('I am a :dog:');