function awardBonuses(arr) {
    let prizeArr = arr.map(id => {
        if (id % 3 === 0 && id % 5 === 0) {
            return 'JACKPOT: 1 Million and a Yacht!';
        } else if (id % 3 === 0 ) {
            return 'Vacation!';
        } else if (id % 5 === 0) {
            return '$100,000 bonus!'
        }  else {
            return ':('
        }
    })

    return prizeArr;
}

awardBonuses([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);