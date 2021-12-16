// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers, name){
    return drivers.filter(ppl => ppl.toLowerCase() === name.toLowerCase())
}
function fuzzyMatch(drivers, letter){
    return drivers.filter(ppl => ppl[0] + ppl[1] === letter)
}
function matchName(drivers, string){
    return drivers.filter(ppl => ppl.name === string)
}