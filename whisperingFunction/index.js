function whisper(str) {
    if(str.endsWith('!')) {
        return 'shh... ' + str.slice(0, -1).toLowerCase();
    }

    return 'shh... ' + str.toLowerCase();
}

whisper("Hello my name is Ryan.");