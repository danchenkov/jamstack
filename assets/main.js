console.log("Logger")

function f(arr) {
    let aim = arr.filter(v=>v%2===1).map(v=>v**2)
    let af = aim.reduce((acc,v)=>acc+v,0)
    return af
}

console.log(f([2,3,4,5]))