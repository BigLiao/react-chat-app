var a = [1,3,4,5,6,8,4,3,2,1]
var b = [4,2]

a.forEach((v1, k1) => {
  b.forEach((v2, k2) => {
    if (v1 === v2) {
      console.log(v1)
      a.splice(k1, 1)
    }
  })
})

console.log(a)