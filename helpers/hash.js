const bcrypt = require('bcrypt');

// bcrypt.genSalt(10, (err, salt) => {
//   if(err){
//     return (err)
//   }
//   bcrypt.hash('spectrum',salt, (err, hash) => {
//     if(err){
//       return (err)
//     }
//     console.log(hash)
//   })
// })

bcrypt.genSalt(10, salt)
  .then(data => {
    bcrypt.hash('spectrum',data, hash)
      .then(data => {
        console.log(data)
      })
  })
  .catch(err => err)
