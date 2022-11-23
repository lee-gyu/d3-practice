import data from "./data.json"
import * as d3 from "d3"

d3.selectAll("div")
    .style("height", "30px")
    .style("background", "gray")
    .style("margin-top", "2px")

d3.select("div.test")
    .style("overflow", "hidden")
    .selectAll("div")
    .style("background", "blue")
    .style("color", "white")

