// code your solution here

function saturdayFun(rollerskate){
    if (!rollerskate) {
        return "This Saturday, I want to roller-skate!"
    } else {
        return "This Saturday, I want to bathe my dog!"
    }
}

function mondayWork(goToOffice){
    if (!goToOffice) {
        return "This Monday, I will go to the office."
    } else {
        return "This Monday, I will work from home."
    }
}

function wrapAdjective(string = "*"){
    const innerFunction = function(adjective='special'){
        return `You are ${string}${adjective}${string}!`
    }
    return innerFunction
}