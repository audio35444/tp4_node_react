let request = require('request');
const {apiUrl,uri} = require('../config/settings.json');
//seller_id
module.exports.getElementProfileById = (profileTag,id) => {
  return new Promise((resolve,reject) => {
    this.genericRequestGetWithPromise(`${profileTag}/${id}`).then( result => resolve(result)).catch( error => reject(error));
  });
};

module.exports.genericRequestGetWithPromise = (fullPath,url=apiUrl+uri) => {
  return new Promise((resolve,reject) => {
    request({
      headers: {
        'Content-Type': 'application/json'
      },
      uri: `${url}${fullPath}`,
      method: 'GET'
    }, (err,res,body) => {
      if(err) reject(err);
      else resolve(JSON.parse(body));
    });
  });
};
