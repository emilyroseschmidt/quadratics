const { request } = require("express");
const express = require("express");

const app = express();
const port = 3000;

app.get("/quadratic", (req, res) => {

function solve(a,b,c){
    var result = (((-1*b) + Math.sqrt(Math.pow(b,2)) - (4*a*c))/(2*a));
    var result2 = (((-1*b) - Math.sqrt(Math.pow(b,2)) - (4*a*c))/(2*a));
    
    return result + result2;
}
let solver = solve(1,1,-1)
res.send(solver)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
