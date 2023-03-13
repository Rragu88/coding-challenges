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

emojifyWord(':dog:');