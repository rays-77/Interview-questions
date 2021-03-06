new Promise(function (resolve, reject) {
  console.log('A')
  resolve()
})
  .then(function () {
    new Promise(function (resolve, reject) {
      console.log('B')
      resolve()
    })
      .then(function () {
        console.log('C')
      })
      .then(function () {
        new Promise(function (resolve, reject) {
          console.log('D')
          resolve()
        })
          .then(function () {
            console.log('E')
          })
          .then(function () {
            console.log('F')
          })
        console.log('G')
      })
    console.log('H')
  })
  .then(function () {
    console.log('I')
  })

new Promise(function (resolve, reject) {
  console.log('J')
  resolve()
})
  .then(function () {
    console.log('K')
  })
  .then(function () {
    console.log('L')
  })

/*

console.log('A')
console.log('J')

console.log('B')
console.log('H')

console.log('K')

console.log('C')
console.log('I')
console.log('L')

console.log('D')
console.log('G')

console.log('E')
console.log('F')
  
*/
