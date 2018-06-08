const {getElementProfileById} = require('../utilities');

module.exports.getNeighborhoodsByCity= (id='TVhYQXJhw6dhdHViYVRVeENVRk5CVDA4NU4yR') => {
  return new Promise((resolve,reject) => {
    getElementProfileById('cities',id).then( result => {
      resolve(result.neighborhoods)
    }).catch( err => reject(err))
  })
}

module.exports.getNeighborhoodById = (id='TVhYQWVyb3BvcnRvVFZoWVFYSmh3NmRoZEhWa') => {
  return new Promise((resolve,reject) => {
    getElementProfileById('neighborhoods',id).then( result => {
      resolve(result)
    }).catch( err => reject(err))
  })
}
if (require.main === module) {
    // this.getNeighborhoodsByCity().then( result => console.log(result))
    this.getNeighborhoodById().then(result =>  console.log(result))

}
