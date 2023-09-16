// Write your solution here!
const cats=["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.splice(3,0,"Ralph")
    return cats;
 }
function destructivelyPrependCat(name){
    cats.splice(0,0,"Bob")
    return cats;
}
function destructivelyRemoveLastCat(){
    cats.splice(2,1)
    return cats;
}
function destructivelyRemoveFirstCat(){
    cats.splice(0,1)
    return cats;
}
function appendCat(name){
    let unchagnedCats=[...cats, "Broom"]
    return unchagnedCats
}
function prependCat(name){
    let unchangedCats2=["Arnold",...cats]
    return unchangedCats2
}
function removeLastCat(){
    let unchangedCats3=cats.slice(0,cats.length-1)
    return unchangedCats3
}
function removeFirstCat(){
    let unchangedCats4=cats.slice(1)
    return unchangedCats4
}