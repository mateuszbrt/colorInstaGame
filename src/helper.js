function randomNr(maxNr) {
    return Math.floor(Math.random()*maxNr)
}

function log(base, number) {
    let logarithm = Math.log(number) / Math.log(base)
    return logarithm.toFixed(5)
}

function getDiffProportions(diff){
    let proportions;
    if (diff === 9 ) return proportions = 540;
    else if (diff === 16 ) return proportions = 720;
    else if (diff === 25 ) return proportions = 900;
    else alert("kurwa")
}

export {randomNr,  log, getDiffProportions}