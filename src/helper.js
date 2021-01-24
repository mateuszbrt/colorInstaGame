function randomNr(maxNr) {
    return Math.floor(Math.random()*maxNr)
}

function log(base, number) {
    let logarithm = Math.log(number) / Math.log(base)
    return logarithm.toFixed(5)
}

export {randomNr,  log}