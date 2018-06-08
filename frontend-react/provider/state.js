import config from "./config"
import {genericGet} from './utilities';

const ENTITY_NAME = 'states'
module.exports.getStatesByCountry = (id='BR') => {
  return new Promise ((resolve,reject) => genericGet(ENTITY_NAME)
    .then( result => resolve(result)).catch( err => reject(err)))
}

module.exports.getStateById = id => {
  return new Promise ((resolve,reject) => {
    if(!id || id === undefined)reject(config.error_msg)
    return new Promise ((resolve,reject) => genericGet(ENTITY_NAME+'/'+id)
      .then( result => resolve(result)).catch( err => reject(err)))
  })
}
