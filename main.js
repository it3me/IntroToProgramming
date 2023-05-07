console.log("hello")
let n=19;
let sum = 0;
for(let i=1; i<=n; i++){
    sum += i;
}
console.log("sum is:", sum)

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log("incoming req"),
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})