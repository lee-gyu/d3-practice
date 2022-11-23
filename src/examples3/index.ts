import * as d3 from "d3"

const newRamp = d3.scaleLinear([500000, 13000000], [0, 500])

console.log(newRamp(1950000))
console.log(newRamp.invert(499))


const colorRamp = d3.scaleLinear([500000, 13000000], ["white", "black"])

console.log(colorRamp(1950000))

