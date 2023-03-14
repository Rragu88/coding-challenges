function isAnagram(str1, str2) {
    let str1Sorted = str1.toLowerCase().split('').sort().join('');
    let str2Sorted = str2.toLowerCase().split('').sort().join('');
    
    if (str1Sorted.length === str2Sorted.length && str1Sorted === str2Sorted) {
        return true;
    } else {
        return false;
    }
}

isAnagram('angel', 'glean');