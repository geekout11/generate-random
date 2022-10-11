function randomNumber(min, max) {

    if (min > max) {
        min = parseInt(max);
        max = parseInt(min);
    }

    return Math.floor(Math.random() * (max - min + 1) + min)

}

function randomString(n) {
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let str = "";

    for (let i = 0; i < n; i++)
        str += possible.charAt(Math.floor(Math.random() * possible.length));

    return str;
}

function randomArray(min, max, n) {

    let rArray = [];
    let rInt = 0;

    for (let i = 0; i < n; i++) {
        rInt = randomNumber(min, max);
        rArray.push(rInt);
    }

    return rArray;

}


module.exports = {
    randomNumber: randomNumber,
    randomString: randomString,
    randomArray: randomArray
}

