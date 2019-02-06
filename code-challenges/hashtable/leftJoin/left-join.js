
function leftJoin(left, right) {
    let result = [];

    for (let i = 0; i < left.length; i++) {
        let current = [];

        if (right.contains(left[i].key)) {
            let ri = right.getHash(left[i].key);
            current.push(left[i].key, left[i].value, right[ri]);

        }
        else { current.push(left[i].key, left[i].value) };
        result.push(...current)
    }
    return result;
}