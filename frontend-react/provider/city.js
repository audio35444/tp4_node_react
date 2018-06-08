import config from "./config"
import {genericGet} from './utilities';

const ENTITY_NAME = 'cities'
module.exports.getCitiesByState = id => {
  return new Promise ((resolve,reject) => {
    if(!id || id === undefined)reject(config.error_msg)
    genericGet("states/"+id+"/"+ENTITY_NAME)
    .then( result => resolve(result)).catch( err => reject(err))
  })
}

module.exports.getCityById = id => {
  return new Promise ((resolve,reject) => {
    if(!id || id === undefined)reject(config.error_msg)
    return new Promise ((resolve,reject) => genericGet(ENTITY_NAME+'/'+id)
      .then( result => resolve(result)).catch( err => reject(err)))
  })
}
