import config from "./config"

module.exports.genericGet = endpoint => {
  endpoint = config.base_endpoint + config.port + endpoint
  return new Promise((resolve,reject) => {
      const xhr = new XMLHttpRequest()
      console.log("endpoint",endpoint);
      xhr.open("GET", endpoint, true)
      xhr.onload = e => {
        if (xhr.readyState === 4){
          if (xhr.status === 200){
            resolve(JSON.parse(xhr.response))
          } else reject(xhr.statusText)
        }
      }
      xhr.onerror = e => reject(xhr.statusText)
      xhr.send(null)
  })
}
