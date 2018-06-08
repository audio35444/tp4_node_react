const {getElementProfileById} = require('../utilities');
const {getNeighborhoodsByCity} = require('./neighborhood');

let acuPromise=[]
module.exports.getCitiesByState = (id='TUxCUFBJQUk1NDVj') => {
  return new Promise((resolve,reject) => {
    acuPromise=[]
    getElementProfileById('states',id).then( result => {
      result.cities.map((value,i) => {
        acuPromise.push(getNeighborhoodsByCity(value.id))
      })
      console.log(result.cities);
      Promise.all(acuPromise).then(results => {
        results.map((value,i) => {
          result.cities[i].NeighborhoodCant = value.length
        })
        resolve(result.cities)
      })
    }).catch( err => reject(err))
  })
}

module.exports.getCityById = (id='TVhYQXJhw6dhdHViYVRVeENVRk5CVDA4NU4yR') => {
  return new Promise((resolve,reject) => {
    getElementProfileById('cities',id).then( result => {
      resolve(result)
    }).catch( err => reject(err))
  })
}
if (require.main === module) {
    // this.getCitiesByState().then( result => console.log(result))
    this.getCityById().then(result =>  console.log(result))

}
