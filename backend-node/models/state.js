const {getElementProfileById} = require('../utilities');

module.exports.getStatesByCountry = (id='BR') => {
  return new Promise((resolve,reject) => {
    getElementProfileById('countries',id).then( result => {
      resolve(result.states)
    }).catch( err => reject(err))
  })
}

module.exports.getStateById = (id='TUxCUFBJQUk1NDVj') => {
  return new Promise((resolve,reject) => {
    getElementProfileById('states',id).then( result => {
      resolve(result)
    }).catch( err => reject(err))
  })
}
if (require.main === module) {
    // this.getStatesByCountry().then( result => console.log(result))
    this.getStateById().then(result =>  console.log(result))

}
